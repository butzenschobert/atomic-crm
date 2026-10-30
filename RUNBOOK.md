# Runbook: Ideen-Butze CRM

Two procedures: inspect the CRM locally, deploy / update production. Plus the one-time production bootstrap and recovery notes.

Prerequisites on the machine: Node ≥ 20, Docker (for local Supabase), `make`, a GitHub account with push access to `butzenschobert/atomic-crm`, a supabase.com account.

---

## 1. Inspect locally

Full stack on your machine: Postgres + Supabase API in Docker, Vite dev server for the frontend. Nothing touches production.

```sh
cd ~/projects/internal/ideen-butze-crm
make install          # first time only: npm deps + local Supabase
make start            # starts Supabase (Docker) + Vite
```

Open <http://localhost:5173>. First visit asks you to create the initial admin user — any email/password, it is local only.

Useful local URLs:

| What | URL |
|---|---|
| App | http://localhost:5173 |
| Supabase Studio (tables, SQL, auth) | http://localhost:54323 |
| REST API | http://127.0.0.1:54321 |
| Inbucket (catches all outgoing mail, e.g. invitations) | http://localhost:54324 |

### Load the HubSpot data locally

Order matters: companies first so contacts can link to them.

1. **Companies** page → **Import CSV** → `import/hubspot-2026-05/companies.csv`
2. **Contacts** page → **Import CSV** → `import/hubspot-2026-05/contacts_ideen_butze.csv`
3. Spot-check: Matthias Kolberg → insertEFFECT, status Hot, tags Kunde/Entwicklung/Sales. Kathrin Albrecht → KIS CONCEPT, background "Spitzname: Khaddi".

`contacts_cooki_subscribers.csv` is deliberately *not* imported — those are Cooki newsletter signups, not CRM contacts.

Unknown columns are ignored and tags / companies are auto-created if missing, so a re-import after editing the CSV is safe but **creates duplicates** — reset first (`make supabase-reset-database`, destructive, local only).

### Other local commands

```sh
make stop                        # stop Docker Supabase
make supabase-reset-database     # wipe local DB, re-apply migrations (local only)
make start-demo                  # frontend only, in-memory fake data, no Docker
make typecheck && make lint      # before committing
make test                        # vitest, launches headless Chromium
```

### Change domain config

Edit `src/App.tsx` (stages, categories, sectors, statuses, task types). Rules:

- `value` is stored in the DB. Never rename a value that is already used by records; add a new one and migrate data in Supabase Studio if needed.
- `label` is display only, change freely.
- Removing a stage/category still in use is blocked by the Settings page validation; `App.tsx` has no such guard, so check the Deals board first.

Admins can also change these lists at runtime: **Settings** in the user menu. Runtime settings override `App.tsx` defaults and survive deploys.

### Change translations

UI is English by default. German strings live in `src/components/atomic-crm/providers/commons/germanCrmMessages.ts` (CRM) and `germanRaMessages.ts` (framework). Key set is defined by `englishCrmMessages.ts`; `germanCrmMessages.ts` uses `satisfies CrmMessages`, so a missing key fails `make typecheck`. Each user switches language in the profile page; the choice is persisted per user.

---

## 2. Production bootstrap (one time)

Skip to §3 if `.env.production.local` already exists and the GitHub Pages site is live.

### 2.1 Supabase project

```sh
cd ~/projects/internal/ideen-butze-crm
make supabase-remote-init
```

The script logs you into the Supabase CLI (browser), asks for a project name (use `ideen-butze-crm`), region (`eu-central-1` / Frankfurt), creates the project, applies migrations, deploys edge functions, and writes `.env.production.local` with `VITE_SUPABASE_URL` and `VITE_SB_PUBLISHABLE_KEY`. It logs the CLI out at the end.

The browser login leaves a non-expiring personal access token on supabase.com. Revoke it afterwards at <https://supabase.com/dashboard/account/tokens>, or avoid it: create a token with an expiry there first and run `SUPABASE_ACCESS_TOKEN=<token> make supabase-remote-init`.

`.env.production.local` is gitignored. Back it up in the password manager — it is the only link between this repo and the production backend.

### 2.2 SMTP (required for inviting Max)

Supabase's built-in mailer only sends to pre-authorised addresses and is rate-limited; invitations and password resets need a real SMTP provider.

1. Postmark (or Resend, Brevo, …): create account, verify sender domain or a single sender signature, enable SMTP, copy the Server API token.
2. Supabase dashboard → project → **Authentication → SMTP Settings** → enable Custom SMTP:
   - Host `smtp.postmarkapp.com`, port `587`
   - Username and password: both the Server API token
   - Sender: e.g. `crm@ideenbutze.de`, name `Ideen-Butze CRM`
3. **Authentication → Rate Limits**: raise the email limit above the default 30/h if needed.

Deferring this is fine for a solo test, but the second user cannot be created without it.

### 2.3 Frontend on GitHub Pages

```sh
npm run ghpages:deploy
```

Builds with `.env.production.local` and pushes `dist/` to the `gh-pages` branch. Then in GitHub → repo **Settings → Pages**: source = `gh-pages` branch, root. App lands at `https://butzenschobert.github.io/atomic-crm/` after a minute or two.

Open it once: the first visit creates the production admin account (use your real email; this becomes the login).

### 2.4 Load production data

Same as §1 "Load the HubSpot data", but on the production URL. Do it once. Then add Max: **Settings → Users → New user** (needs SMTP from §2.2).

### 2.5 Optional: CI deploy on push

`.github/workflows/` already contains a deploy action. To enable it, add repo secrets (`SUPABASE_ACCESS_TOKEN`, `SUPABASE_DB_PASSWORD`, `SUPABASE_PROJECT_ID`, `SUPABASE_URL`, `SB_PUBLISHABLE_KEY`; the `POSTMARK_*` and `VITE_INBOUND_EMAIL` ones only for inbound mail). Every push to `main` then runs `make prod-deploy`. With two users and rare changes, manual deploys (§3) are enough — the CI path mostly adds a long-lived Supabase token in GitHub.

---

## 3. Deploy an update to production

For any change: config in `App.tsx`, translations, upstream merge, schema change.

```sh
cd ~/projects/internal/ideen-butze-crm
git status                  # clean tree, on main
make typecheck && make lint
make prod-deploy            # = build + supabase db push + functions deploy + gh-pages push
git push origin main        # keep the fork's main in sync with what is deployed
```

`make prod-deploy` reads `.env.production.local`; if that file is missing the build points at nothing — stop and restore it from the password manager.

Frontend-only change (labels, translations, `App.tsx`) does not strictly need the Supabase step, but `prod-deploy` is idempotent and cheap; use it anyway so backend and frontend never drift.

### Test against production data before deploying

```sh
make prod-start             # local frontend on :3000, connected to the remote Supabase
```

This *does* apply pending migrations and deploy edge functions to production as a side effect. Treat it as a half-deploy, not a dry run.

### Schema changes

1. Edit `supabase/schemas/*.sql` (source of truth), never `supabase/migrations/` by hand.
2. `npx supabase db diff --local -f <name>` → generates the migration.
3. `npx supabase migration up --local`, test locally.
4. `make prod-deploy` applies it remotely.
5. Backup first for anything destructive: Supabase dashboard → **Database → Backups** (daily on free tier; take a manual `pg_dump` via Studio if the change drops columns).

---

## 4. Recovery / troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Want the UI in German | English is the default | Profile → Language → Deutsch (persisted per user) |
| Invitation email never arrives | No custom SMTP | §2.2 |
| `make prod-deploy` builds but site unchanged | `gh-pages` pushed, Pages still caching | Hard reload; check Actions tab for the Pages build |
| Blank page at `/atomic-crm/` after deploy | `.env.production.local` missing at build time | Restore the file, redeploy |
| Import created duplicate companies | Re-ran import without reset | Merge via Contacts → "Merge with another contact"; companies: delete the duplicate in UI |
| Import "succeeds" but rows are empty / `null null` | Wrong file: raw HubSpot export instead of the mapped CSVs in `import/` | Delete the empty rows (Studio → SQL: `delete from contacts where first_name is null and last_name is null`), import the mapped files |
| Settings page shows old stages after `App.tsx` change | Runtime settings override defaults | Settings → "Reset to Defaults" |
| `git am` / `git commit` fails with `.lock` exists | Running git through a shell that cannot delete files | Use a normal terminal |

### Second instance (ebing)

Fork again (or branch from this fork) → change `title`, stages, categories in `App.tsx` → `make supabase-remote-init` with a *new* project name → new `.env.production.local` → deploy to its own repo's GitHub Pages. Do not reuse the Ideen-Butze Supabase project.
