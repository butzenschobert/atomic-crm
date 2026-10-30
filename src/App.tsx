import { CRM } from "@/components/atomic-crm/root/CRM";

/**
 * Ideen-Butze CRM configuration.
 *
 * Stored values (`value`) live in the database and in import CSVs, so they
 * must stay stable once records exist. Labels are display only.
 * Admins can further adjust these lists at runtime via the Settings page.
 */
const App = () => (
  <CRM
    title="Ideen-Butze CRM"
    currency="EUR"
    disableTelemetry
    companySectors={[
      { value: "it-software", label: "IT & Software" },
      { value: "beratung", label: "Consulting" },
      { value: "gesundheit", label: "Health & Therapy" },
      { value: "dienstleistung", label: "Services" },
      { value: "bildung", label: "Education" },
      { value: "events", label: "Events & Marketing" },
      { value: "handel", label: "Retail & E-Commerce" },
      { value: "industrie", label: "Industry & Construction" },
      { value: "sonstiges", label: "Other" },
    ]}
    dealStages={[
      { value: "lead", label: "Lead" },
      { value: "qualified", label: "Qualified" },
      { value: "proposal-sent", label: "Proposal Sent" },
      { value: "in-negotiation", label: "In Negotiation" },
      { value: "won", label: "Won" },
      { value: "lost", label: "Lost" },
      { value: "delayed", label: "On Hold" },
    ]}
    dealPipelineStatuses={["won"]}
    dealCategories={[
      { value: "web", label: "Web Development" },
      { value: "app", label: "App Development" },
      { value: "mvp", label: "MVP / Product Development" },
      { value: "consulting", label: "Consulting & Workshops" },
      { value: "design", label: "Design & UX" },
      { value: "maintenance", label: "Maintenance & Operations" },
      { value: "other", label: "Other" },
    ]}
    noteStatuses={[
      { value: "kalt", label: "Cold", color: "#7dbde8" },
      { value: "warm", label: "Warm", color: "#e8cb7d" },
      { value: "heiss", label: "Hot", color: "#e88b7d" },
      { value: "kunde", label: "Customer", color: "#a4e87d" },
    ]}
    taskTypes={[
      { value: "none", label: "None" },
      { value: "call", label: "Call" },
      { value: "email", label: "Email" },
      { value: "meeting", label: "Meeting" },
      { value: "demo", label: "Demo" },
      { value: "proposal", label: "Proposal" },
      { value: "follow-up", label: "Follow-up" },
    ]}
  />
);

export default App;
