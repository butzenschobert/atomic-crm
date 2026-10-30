"""Map HubSpot exports to Atomic CRM import CSVs (companies + contacts)."""
import csv
import re
import sys
from pathlib import Path

SRC = Path(sys.argv[1])
OUT = Path(sys.argv[2])
OUT.mkdir(parents=True, exist_ok=True)

# --- config values (must match src/App.tsx) ---------------------------------
SECTOR_BY_INDUSTRY = {
    "Consumer Services": "dienstleistung",
    "E-Learning": "bildung",
    "Management Consulting": "beratung",
    "Information Technology and Services": "it-software",
    "Medical Practice": "gesundheit",
    "Events Services": "events",
}
SECTOR_BY_NAME = {"bytabo GmbH": "it-software"}  # no HubSpot industry set

STATE_ABBR = {"Bayern": "BY", "Berlin": "BE", "Baden-Württemberg": "BW"}

# HubSpot country column is unreliable (Karlsruhe -> "United States")
COUNTRY_BY_CITY = {
    "Jönköping": "Schweden",
    "Karlsruhe": "Deutschland",
    "Regensburg": "Deutschland",
    "Bamberg": "Deutschland",
    "Wietzendorf": "Deutschland",
    "Pommersfelden": "Deutschland",
    "Nürnberg": "Deutschland",
    "Rattelsdorf": "Deutschland",
    "Buttenheim": "Deutschland",
    "München": "Deutschland",
}
COUNTRY_NAME = {"Germany": "Deutschland", "United States": "USA"}

# HubSpot auto-enrichment attached wrong data to these; blank the junk fields
CLEAR_FIELDS = {
    "Simon Hagedorn": ["linkedin_url", "address", "zipcode", "state_abbr", "country", "description", "city"],
    "FC-Gruppe": ["address"],
    "Stimm.DEV": ["state_abbr"],
}

SKIP_TAGS = {"Dienstleistung"}  # "Related Project" noise
RELATION_RENAME: dict[str, str] = {}


def iso(hs_date: str) -> str:
    """'2025-04-01 08:14' -> '2025-04-01T08:14:00+01:00'."""
    t = hs_date.strip()
    if not t:
        return ""
    m = re.match(r"^(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2})$", t)
    return f"{m.group(1)}T{m.group(2)}:00+01:00" if m else t


def clean_phone(p: str) -> str:
    return re.sub(r"\s+", "", p.strip())


def de_address(a: str) -> str:
    """HubSpot stores '5 Hessestraße'; German order is 'Hessestraße 5'."""
    m = re.match(r"^(\d+[a-zA-Z]?)\s+(.+)$", a.strip())
    return f"{m.group(2)} {m.group(1)}" if m else a.strip()


def website(url: str) -> str:
    u = url.strip()
    return f"https://{u}" if u and not u.startswith("http") else u


def revenue(v: str) -> str:
    v = v.strip()
    if not v:
        return ""
    n = float(v)
    return f"{n/1e6:g}M €" if n >= 1e6 else f"{n:g} €"


def split_multi(v: str) -> list[str]:
    return [x.strip() for x in re.split(r"[;,]", v) if x.strip()]


# --- companies ---------------------------------------------------------------
comp_rows = list(csv.DictReader(open(SRC / "HubSpot_CRM_Exports_All_Companies_May_2026.csv", encoding="utf-8")))
comp_out = []
comp_notes = []
for r in comp_rows:
    name = r["Company name"].strip()
    sector = SECTOR_BY_INDUSTRY.get(r["Industry"].strip()) or SECTOR_BY_NAME.get(name, "")
    if not sector:
        comp_notes.append(f"{name}: no sector mapped (HubSpot industry '{r['Industry']}')")
    desc = (r["Description"] or r["LinkedIn Bio"]).strip()
    typ = r["Type"].strip()
    if typ:
        desc = f"[HubSpot-Typ: {typ}] {desc}".strip()
    city = r["City"].strip()
    row = {
        "name": name,
        "sector": sector,
        "size": r["Number of Employees"].strip().replace(".0", ""),
        "linkedin_url": r["LinkedIn Company Page"].strip(),
        "website": website(r["Website URL"] or r["Company Domain Name"]),
        "phone_number": clean_phone(r["Phone Number"]),
        "address": de_address(r["Street Address"]),
        "zipcode": r["Postal Code"].strip(),
        "city": city,
        "state_abbr": STATE_ABBR.get(r["State/Region"].strip(), r["State/Region"].strip()),
        "country": COUNTRY_BY_CITY.get(city) or COUNTRY_NAME.get(r["Country/Region"].strip(), r["Country/Region"].strip()),
        "description": desc,
        "revenue": revenue(r["Annual Revenue"]),
        "tax_identifier": "",
    }
    for field in CLEAR_FIELDS.get(name, []):
        row[field] = ""
    comp_out.append(row)

comp_cols = list(comp_out[0].keys())
with open(OUT / "companies.csv", "w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=comp_cols)
    w.writeheader()
    w.writerows(comp_out)
known_companies = {c["name"] for c in comp_out}

# --- contacts ----------------------------------------------------------------
cont_rows = list(csv.DictReader(open(SRC / "HubSpot_CRM_All_Contacts_May_6_2026.csv", encoding="utf-8")))


def status_of(r) -> str:
    lc, active = r["Lifecycle Stage"].strip(), r["Status"].strip() == "Active"
    if lc == "Customer":
        return "kunde"
    if lc == "Opportunity":
        return "heiss"
    return "warm" if active else "kalt"


def tags_of(r) -> list[str]:
    tags = []
    for rel in split_multi(r["Relation"]):
        tags.append(RELATION_RENAME.get(rel, rel))
    tags += [s for s in split_multi(r["Skills"])]
    tags += [p for p in split_multi(r["Related Project"]) if p not in SKIP_TAGS]
    seen, out = set(), []
    for t in tags:
        if t not in seen:
            seen.add(t)
            out.append(t)
    return out


business, cooki, cont_notes = [], [], []
for r in cont_rows:
    company = (r["Associated Company (Primary)"] or r["Company Name"]).strip()
    if company and company not in known_companies:
        cont_notes.append(f"{r['First Name']} {r['Last Name']}: company '{company}' not in companies export -> will be auto-created")
    tags = tags_of(r)
    nick = r["Nickname"].strip()
    row = {
        "first_name": r["First Name"].strip(),
        "last_name": r["Last Name"].strip(),
        "gender": "",
        "title": r["Job Title"].strip(),
        "background": f"Spitzname: {nick}" if nick else "",
        "first_seen": iso(r["Create Date"]),
        "last_seen": iso(r["Last Activity Date"] or r["Last Modified Date"]),
        "has_newsletter": "true" if "Subscriber" in tags else "false",
        "status": status_of(r),
        "tags": ", ".join(tags),
        "linkedin_url": r["LinkedIn Profile"].strip(),
        "company": company,
        "email_work": r["Email"].strip(),
        "email_home": "",
        "email_other": "",
        "phone_work": clean_phone(r["Phone Number"]),
        "phone_home": "",
        "phone_other": "",
    }
    is_cooki = r["Related Project"].strip() == "Cooki" and "Subscriber" in r["Relation"]
    (cooki if is_cooki else business).append(row)

cont_cols = list(business[0].keys())
for fname, rows in (("contacts_ideen_butze.csv", business), ("contacts_cooki_subscribers.csv", cooki)):
    with open(OUT / fname, "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cont_cols)
        w.writeheader()
        w.writerows(rows)

print(f"companies: {len(comp_out)}")
print(f"contacts business: {len(business)}, cooki subscribers: {len(cooki)}")
print("company notes:", *comp_notes, sep="\n  ")
print("contact notes:", *cont_notes, sep="\n  ")
print("tags used:", sorted({t for r in business for t in split_multi(r['tags'])}))
print("status dist:", {s: sum(1 for r in business if r['status'] == s) for s in ('kalt','warm','heiss','kunde')})
