# Ideen-Butze CRM

Internal CRM for Ideen-Butze, built on [Atomic CRM](https://github.com/marmelab/atomic-crm) (React + shadcn-admin-kit + Supabase). This repo is a fork of `marmelab/atomic-crm` with company-specific configuration on top.

- **Fork:** `butzenschobert/atomic-crm` (this repo). Upstream remains `marmelab/atomic-crm`.
- **Scope:** Ideen-Butze company CRM only. Products with their own sales motion (e.g. ebing) get their own instance — a second fork with its own Supabase project, not a second pipeline in this one.
- **Users:** Nikolas, Max.
- **Hosting:** Supabase cloud (backend) + GitHub Pages (frontend).
- **Upstream docs:** <https://marmelab.com/atomic-crm/doc/>

## What differs from upstream

| Area | Change | Where |
|---|---|---|
| Domain config | Title, EUR, telemetry off, Ideen-Butze sectors / deal stages / categories / note statuses / task types | `src/App.tsx` |
| Locale | English by default; full German UI (`de`) added and selectable per user in the profile, `fr` from upstream | `src/components/atomic-crm/providers/commons/german*.ts`, `i18nProvider.ts`, `misc/RelativeDate.tsx` |
| Import data | Mapped HubSpot export (May 2026) ready for the CSV importer, plus the mapping script | `import/hubspot-2026-05/` |

Stored values (`value` fields in `App.tsx`) must not be renamed once data exists — they live in the database and in the import CSVs. Labels can change freely. Admins can also edit these lists at runtime via **Settings** without a redeploy.

## Quick start

```sh
make install        # deps + local Supabase (needs Docker)
make start          # http://localhost:5173 — create the first user on first visit
make stop
```

Then import `import/hubspot-2026-05/companies.csv` on the Companies page, and `contacts_ideen_butze.csv` on the Contacts page (in that order). See [RUNBOOK.md](./RUNBOOK.md) for the full local / production procedures.

## Repo layout (relevant parts)

```
src/App.tsx                              # all domain configuration
src/components/atomic-crm/               # application code (~15k LOC, meant to be edited)
src/components/atomic-crm/providers/commons/
  englishCrmMessages.ts                  # reference catalog (key set)
  germanCrmMessages.ts                   # German CRM strings
  germanRaMessages.ts                    # German react-admin core + Supabase auth strings
  i18nProvider.ts                        # locale registry, en default
supabase/schemas/                        # declarative DB schema (source of truth)
supabase/migrations/                     # generated, do not hand-edit
import/hubspot-2026-05/                  # one-off import data + mapping script
RUNBOOK.md                               # local inspection + production deploy
```

## Keeping up with upstream

```sh
git remote add upstream https://github.com/marmelab/atomic-crm.git   # once
git fetch upstream
git merge upstream/main
```

Our changes are confined to `App.tsx`, the three German message files, `i18nProvider.ts` and one function in `RelativeDate.tsx`, so merges are usually trivial. After a merge, diff `englishCrmMessages.ts` against the previous version and add any new keys to `germanCrmMessages.ts` (missing keys fall back to English, so nothing breaks, it just shows English).

## Not done yet

- Logo / favicon (upstream placeholders still in use) — see `update-branding` skill in `.claude/skills/`
- Custom SMTP on Supabase (needed for user invitations; see runbook)
- Inbound email (Postmark) — optional
- Deals: the HubSpot export had no deals CSV; create the one known open deal by hand
