import { CRM } from "@/components/atomic-crm/root/CRM";

/**
 * Ideen-Butze CRM configuration.
 *
 * Stored values (`value`) stay English and stable — they live in the database
 * and in import CSVs. Labels are what users see and can be German.
 * Admins can further adjust these lists at runtime via the Settings page.
 */
const App = () => (
  <CRM
    title="Ideen-Butze CRM"
    currency="EUR"
    disableTelemetry
    companySectors={[
      { value: "it-software", label: "IT & Software" },
      { value: "beratung", label: "Beratung" },
      { value: "gesundheit", label: "Gesundheit & Therapie" },
      { value: "dienstleistung", label: "Dienstleistung" },
      { value: "bildung", label: "Bildung" },
      { value: "events", label: "Events & Marketing" },
      { value: "handel", label: "Handel & E-Commerce" },
      { value: "industrie", label: "Industrie & Bau" },
      { value: "sonstiges", label: "Sonstiges" },
    ]}
    dealStages={[
      { value: "lead", label: "Lead" },
      { value: "qualified", label: "Qualifiziert" },
      { value: "proposal-sent", label: "Angebot gesendet" },
      { value: "in-negotiation", label: "In Verhandlung" },
      { value: "won", label: "Gewonnen" },
      { value: "lost", label: "Verloren" },
      { value: "delayed", label: "Pausiert" },
    ]}
    dealPipelineStatuses={["won"]}
    dealCategories={[
      { value: "web", label: "Webentwicklung" },
      { value: "app", label: "App-Entwicklung" },
      { value: "mvp", label: "MVP / Produktentwicklung" },
      { value: "consulting", label: "Beratung & Workshops" },
      { value: "design", label: "Design & UX" },
      { value: "maintenance", label: "Wartung & Betrieb" },
      { value: "other", label: "Sonstiges" },
    ]}
    noteStatuses={[
      { value: "kalt", label: "Kalt", color: "#7dbde8" },
      { value: "warm", label: "Warm", color: "#e8cb7d" },
      { value: "heiss", label: "Heiß", color: "#e88b7d" },
      { value: "kunde", label: "Kunde", color: "#a4e87d" },
    ]}
    taskTypes={[
      { value: "none", label: "Keine" },
      { value: "call", label: "Anruf" },
      { value: "email", label: "E-Mail" },
      { value: "meeting", label: "Meeting" },
      { value: "demo", label: "Demo" },
      { value: "proposal", label: "Angebot" },
      { value: "follow-up", label: "Follow-up" },
    ]}
  />
);

export default App;
