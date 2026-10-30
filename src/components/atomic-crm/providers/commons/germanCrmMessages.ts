import type { CrmMessages } from "./englishCrmMessages";

export const germanCrmMessages = {
  resources: {
    companies: {
      name: "Unternehmen |||| Unternehmen",
      forcedCaseName: "Unternehmen",
      fields: {
        name: "Firmenname",
        website: "Website",
        linkedin_url: "LinkedIn-URL",
        phone_number: "Telefonnummer",
        created_at: "Erstellt am",
        nb_contacts: "Anzahl Kontakte",
        revenue: "Umsatz",
        sector: "Branche",
        size: "Größe",
        tax_identifier: "Steuernummer",
        address: "Adresse",
        city: "Stadt",
        zipcode: "PLZ",
        state_abbr: "Bundesland",
        country: "Land",
        description: "Beschreibung",
        context_links: "Kontext-Links",
        sales_id: "Betreuer",
      },
      empty: {
        description: "Deine Unternehmensliste scheint leer zu sein.",
        title: "Keine Unternehmen gefunden",
      },
      import: {
        title: "Unternehmen importieren",
      },
      field_categories: {
        contact: "Kontakt",
        additional_info: "Zusätzliche Informationen",
        address: "Adresse",
        context: "Kontext",
      },
      action: {
        create: "Unternehmen anlegen",
        edit: "Unternehmen bearbeiten",
        new: "Neues Unternehmen",
        show: "Unternehmen anzeigen",
      },
      added_on: "Hinzugefügt am %{date}",
      followed_by: "Betreut von %{name}",
      followed_by_you: "Von dir betreut",
      no_contacts: "Kein Kontakt",
      nb_contacts: "%{smart_count} Kontakt |||| %{smart_count} Kontakte",
      nb_deals: "%{smart_count} Deal |||| %{smart_count} Deals",
      sizes: {
        one_employee: "1 Mitarbeiter",
        two_to_nine_employees: "2–9 Mitarbeiter",
        ten_to_forty_nine_employees: "10–49 Mitarbeiter",
        fifty_to_two_hundred_forty_nine_employees: "50–249 Mitarbeiter",
        two_hundred_fifty_or_more_employees: "250 oder mehr Mitarbeiter",
      },
      autocomplete: {
        create_error: "Fehler beim Anlegen des Unternehmens",
        create_item: "%{item} anlegen",
        create_label: "Tippe, um ein neues Unternehmen anzulegen",
      },
    },
    contacts: {
      name: "Kontakt |||| Kontakte",
      forcedCaseName: "Kontakt",
      field_categories: {
        background_info: "Hintergrund",
        identity: "Identität",
        misc: "Sonstiges",
        personal_info: "Kontaktdaten",
        position: "Position",
      },
      fields: {
        first_name: "Vorname",
        last_name: "Nachname",
        last_seen: "Zuletzt gesehen",
        title: "Position",
        company_id: "Unternehmen",
        email_jsonb: "E-Mail-Adressen",
        email: "E-Mail",
        phone_jsonb: "Telefonnummern",
        phone_number: "Telefonnummer",
        linkedin_url: "LinkedIn-URL",
        background: "Hintergrund (Bio, wie kennengelernt usw.)",
        has_newsletter: "Newsletter-Empfänger",
        sales_id: "Betreuer",
      },
      action: {
        add: "Kontakt hinzufügen",
        add_first: "Ersten Kontakt hinzufügen",
        create: "Kontakt anlegen",
        edit: "Kontakt bearbeiten",
        export_vcard: "Als vCard exportieren",
        new: "Neuer Kontakt",
        show: "Kontakt anzeigen",
      },
      autocomplete: {
        create_item: "%{item} anlegen",
        create_label: "Tippe, um einen neuen Kontakt anzulegen",
      },
      background: {
        last_activity_on: "Letzte Aktivität am %{date}",
        added_on: "Hinzugefügt am %{date}",
        followed_by: "Betreut von %{name}",
        followed_by_you: "Von dir betreut",
        status_none: "Keiner",
      },
      position_at: "%{title} bei",
      position_at_company: "%{title} bei %{company}",
      empty: {
        description: "Deine Kontaktliste scheint leer zu sein.",
        title: "Keine Kontakte gefunden",
      },
      import: {
        title: "Kontakte importieren",
      },
      inputs: {
        genders: {
          male: "Er/Ihm",
          female: "Sie/Ihr",
          nonbinary: "Divers",
        },
        personal_info_types: {
          work: "Geschäftlich",
          home: "Privat",
          other: "Sonstige",
        },
      },
      list: {
        error_loading: "Fehler beim Laden der Kontakte",
      },
      bulk_tag: {
        action: "Taggen",
        back: "Zurück zu den Tags",
        create_description:
          "Neuen Tag anlegen und auf die ausgewählten Kontakte anwenden.",
        description:
          "Wähle einen bestehenden Tag oder lege einen neuen für die ausgewählten Kontakte an.",
        empty:
          "Noch keine Tags. Lege einen an, um die ausgewählten Kontakte zu taggen.",
        error: "Tag konnte nicht hinzugefügt werden",
        removed:
          "Tag von %{smart_count} Kontakt entfernt |||| Tag von %{smart_count} Kontakten entfernt",
        success:
          "Tag zu %{smart_count} Kontakt hinzugefügt |||| Tag zu %{smart_count} Kontakten hinzugefügt",
        title: "Tag zu Kontakten hinzufügen",
      },
      merge: {
        action: "Mit anderem Kontakt zusammenführen",
        confirm: "Kontakte zusammenführen",
        current_contact: "Aktueller Kontakt (wird gelöscht)",
        description: "Diesen Kontakt mit einem anderen zusammenführen.",
        error: "Zusammenführen fehlgeschlagen",
        merging: "Wird zusammengeführt…",
        no_additional_data: "Keine zusätzlichen Daten zum Zusammenführen",
        select_target: "Bitte Zielkontakt auswählen",
        success: "Kontakte erfolgreich zusammengeführt",
        target_contact: "Zielkontakt (bleibt erhalten)",
        title: "Kontakt zusammenführen",
        warning_description:
          "Alle Daten werden auf den zweiten Kontakt übertragen. Dies kann nicht rückgängig gemacht werden.",
        warning_title: "Achtung: Destruktive Aktion",
        what_will_be_merged: "Was zusammengeführt wird:",
      },
      filters: {
        before_last_month: "Vor letztem Monat",
        before_this_month: "Vor diesem Monat",
        before_this_week: "Vor dieser Woche",
        managed_by_me: "Von mir betreut",
        search: "Name, Unternehmen suchen…",
        this_week: "Diese Woche",
        today: "Heute",
        tags: "Tags",
        tasks: "Aufgaben",
      },
      hot: {
        empty_change_status:
          "Ändere den Status eines Kontakts, indem du eine Notiz hinzufügst und auf „Optionen anzeigen“ klickst.",
        empty_hint: "Kontakte mit Status „Heiß“ erscheinen hier.",
        title: "Heiße Kontakte",
      },
    },
    deals: {
      name: "Deal |||| Deals",
      fields: {
        name: "Name",
        description: "Beschreibung",
        company_id: "Unternehmen",
        contact_ids: "Kontakte",
        categories: "Kategorien",
        amount: "Budget",
        expected_closing_date: "Erwarteter Abschluss",
        stage: "Phase",
      },
      action: {
        back_to_deal: "Zurück zum Deal",
        create: "Deal anlegen",
        new: "Neuer Deal",
      },
      field_categories: {
        misc: "Sonstiges",
      },
      filters: {
        only_mine: "Nur meine Deals",
      },
      archived: {
        action: "Archivieren",
        error: "Fehler: Deal nicht archiviert",
        list_title: "Archivierte Deals",
        success: "Deal archiviert",
        title: "Archivierter Deal",
        view: "Archivierte Deals anzeigen",
      },
      inputs: {
        linked_to: "Verknüpft mit",
      },
      unarchived: {
        action: "Zurück aufs Board",
        error: "Fehler: Deal nicht wiederhergestellt",
        success: "Deal wiederhergestellt",
      },
      updated: "Deal aktualisiert",
      empty: {
        before_create: "bevor du einen Deal anlegst.",
        description: "Deine Deal-Liste scheint leer zu sein.",
        title: "Keine Deals gefunden",
      },
      import: {
        title: "Deals importieren",
      },
      invalid_date: "Ungültiges Datum",
    },
    notes: {
      name: "Notiz |||| Notizen",
      forcedCaseName: "Notiz",
      fields: {
        status: "Status",
        date: "Datum",
        attachments: "Anhänge",
        contact_id: "Kontakt",
        deal_id: "Deal",
      },
      action: {
        add: "Notiz hinzufügen",
        add_first: "Erste Notiz hinzufügen",
        delete: "Notiz löschen",
        edit: "Notiz bearbeiten",
        update: "Notiz aktualisieren",
        add_this: "Diese Notiz hinzufügen",
      },
      sheet: {
        create: "Notiz anlegen",
        create_for: "Notiz für %{name} anlegen",
        edit: "Notiz bearbeiten",
        edit_for: "Notiz für %{name} bearbeiten",
      },
      deleted: "Notiz gelöscht",
      empty: "Noch keine Notizen",
      author_added: "%{name} hat eine Notiz hinzugefügt",
      you_added: "Du hast eine Notiz hinzugefügt",
      me: "Ich",
      list: {
        error_loading: "Fehler beim Laden der Notizen",
      },
      note_for_contact: "Notiz für %{name}",
      stepper: {
        hint: "Öffne einen Kontakt und füge eine Notiz hinzu",
      },
      added: "Notiz hinzugefügt",
      inputs: {
        add_note: "Notiz hinzufügen",
        options_hint: "(Dateien anhängen oder Details ändern)",
        show_options: "Optionen anzeigen",
      },
      actions: {
        attach_document: "Dokument anhängen",
      },
      validation: {
        note_or_attachment_required: "Notiz oder Anhang erforderlich",
      },
    },
    sales: {
      name: "Benutzer |||| Benutzer",
      fields: {
        first_name: "Vorname",
        last_name: "Nachname",
        email: "E-Mail",
        secondary_email: "Zweit-E-Mail",
        secondary_emails: "Weitere E-Mail-Adressen",
        administrator: "Admin",
        disabled: "Deaktiviert",
      },
      create: {
        error: "Fehler beim Anlegen des Benutzers.",
        success:
          "Benutzer angelegt. Er erhält in Kürze eine E-Mail zum Setzen des Passworts.",
        title: "Neuen Benutzer anlegen",
      },
      edit: {
        error: "Ein Fehler ist aufgetreten. Bitte erneut versuchen.",
        record_not_found: "Datensatz nicht gefunden",
        success: "Benutzer erfolgreich aktualisiert",
        title: "%{name} bearbeiten",
      },
      action: {
        new: "Neuer Benutzer",
      },
    },
    tasks: {
      name: "Aufgabe |||| Aufgaben",
      forcedCaseName: "Aufgabe",
      fields: {
        text: "Beschreibung",
        due_date: "Fällig am",
        type: "Typ",
        contact_id: "Kontakt",
        due_short: "fällig",
      },
      action: {
        add: "Aufgabe hinzufügen",
        create: "Aufgabe anlegen",
        edit: "Aufgabe bearbeiten",
      },
      actions: {
        postpone_next_week: "Auf nächste Woche verschieben",
        postpone_tomorrow: "Auf morgen verschieben",
        title: "Aufgabenaktionen",
      },
      added: "Aufgabe hinzugefügt",
      deleted: "Aufgabe gelöscht",
      dialog: {
        create: "Aufgabe anlegen",
        create_for: "Aufgabe für %{name} anlegen",
      },
      sheet: {
        edit: "Aufgabe bearbeiten",
        edit_for: "Aufgabe für %{name} bearbeiten",
      },
      empty: "Noch keine Aufgaben",
      empty_list_hint: "Aufgaben zu deinen Kontakten erscheinen hier.",
      filters: {
        later: "Später",
        overdue: "Überfällig",
        this_week: "Diese Woche",
        today: "Heute",
        tomorrow: "Morgen",
        with_pending: "Mit offenen Aufgaben",
      },
      regarding_contact: "(Betr.: %{name})",
      updated: "Aufgabe aktualisiert",
    },
    tags: {
      name: "Tag |||| Tags",
      action: {
        add: "Tag hinzufügen",
        create: "Neuen Tag anlegen",
      },
      dialog: {
        color: "Farbe",
        create_title: "Neuen Tag anlegen",
        edit_title: "Tag bearbeiten",
        name_label: "Tag-Name",
        name_placeholder: "Tag-Name eingeben",
      },
      empty: "Noch keine Tags.",
    },
  },
  crm: {
    action: {
      reset_password: "Passwort zurücksetzen",
    },
    auth: {
      first_name: "Vorname",
      last_name: "Nachname",
      confirm_password: "Passwort bestätigen",
      confirmation_required:
        "Bitte folge dem Link, den wir dir per E-Mail geschickt haben, um dein Konto zu bestätigen.",
      recovery_email_sent:
        "Falls du registriert bist, erhältst du in Kürze eine E-Mail zum Zurücksetzen des Passworts.",
      sign_in_failed: "Anmeldung fehlgeschlagen.",
      sign_in_google_workspace: "Mit Google Workspace anmelden",
      signup: {
        create_account: "Konto erstellen",
        create_first_user:
          "Lege das erste Benutzerkonto an, um die Einrichtung abzuschließen.",
        creating: "Wird erstellt…",
        initial_user_created: "Erster Benutzer erfolgreich angelegt",
      },
      welcome_title: "Willkommen bei Ideen-Butze CRM",
    },
    common: {
      account_manager: "Betreuer",
      activity: "Aktivität",
      added: "hinzugefügt",
      details: "Details",
      last_activity_with_date: "letzte Aktivität %{date}",
      load_more: "Mehr laden",
      misc: "Sonstiges",
      past: "Vergangen",
      read_more: "Mehr lesen",
      retry: "Erneut versuchen",
      show_less: "Weniger anzeigen",
      copied: "Kopiert!",
      copy: "Kopieren",
      loading: "Lädt…",
      me: "Ich",
      task_count: "%{smart_count} Aufgabe |||| %{smart_count} Aufgaben",
    },
    changelog: {
      title: "Änderungsprotokoll",
    },
    activity: {
      added_company: "%{name} hat Unternehmen hinzugefügt:",
      you_added_company: "Du hast Unternehmen hinzugefügt:",
      added_contact: "%{name} hat hinzugefügt:",
      you_added_contact: "Du hast hinzugefügt:",
      added_note: "%{name} hat eine Notiz geschrieben zu",
      you_added_note: "Du hast eine Notiz geschrieben zu",
      added_note_about_deal: "%{name} hat eine Notiz geschrieben zum Deal",
      you_added_note_about_deal: "Du hast eine Notiz geschrieben zum Deal",
      added_deal: "%{name} hat Deal hinzugefügt:",
      you_added_deal: "Du hast Deal hinzugefügt:",
      at_company: "bei",
      to: "zu",
      load_more: "Mehr Aktivität laden",
    },
    dashboard: {
      deals_chart: "Erwarteter Deal-Umsatz",
      deals_pipeline: "Deal-Pipeline",
      latest_activity: "Letzte Aktivität",
      latest_activity_error: "Fehler beim Laden der Aktivität",
      latest_notes: "Meine letzten Notizen",
      latest_notes_added_ago: "hinzugefügt %{timeAgo}",
      stepper: {
        install: "CRM einrichten",
        progress: "%{step}/3 erledigt",
        whats_next: "Wie geht es weiter?",
      },
      upcoming_tasks: "Anstehende Aufgaben",
    },
    data_import: {
      button: "CSV importieren",
      complete:
        "Import abgeschlossen. %{importCount} Datensätze importiert, %{errorCount} Fehler",
      csv_file: "CSV-Datei",
      error:
        "Import fehlgeschlagen. Bitte stelle sicher, dass es eine gültige CSV-Datei ist.",
      in_progress: "Import läuft…",
      progress:
        "%{importCount} / %{rowCount} Datensätze importiert, %{errorCount} Fehler.",
      remaining_time: "Geschätzte Restzeit:",
      resource: "Datentyp",
      sample_download: "Beispiel-CSV herunterladen",
      sample_hint: "Diese Beispiel-CSV kannst du als Vorlage verwenden",
      start: "Import starten",
      stop: "Import stoppen",
      stopped:
        "Import gestoppt. %{importCount} Datensätze importiert, %{errorCount} Fehler",
      title: "Daten importieren",
    },
    header: {
      import_data: "Aus JSON importieren",
    },
    search: {
      title: "Suche",
      placeholder: "Kontakte, Unternehmen, Deals, Aufgaben und Notizen suchen…",
      hint: "Mindestens %{min} Zeichen eingeben",
      empty: "Keine Ergebnisse",
      error: "Suche ist gerade nicht verfügbar. Bitte erneut versuchen.",
      untitled_result: "(ohne Titel)",
      show_more: "Mehr anzeigen",
      groups: {
        contacts: "Kontakte",
        companies: "Unternehmen",
        deals: "Deals",
        tasks: "Aufgaben",
        contact_notes: "Kontaktnotizen",
        deal_notes: "Deal-Notizen",
      },
    },
    image_editor: {
      change: "Ändern",
      drop_hint: "Datei hierher ziehen oder klicken, um sie auszuwählen.",
      editable_content: "Bearbeitbarer Inhalt",
      title: "Bild hochladen und zuschneiden",
      update_image: "Bild aktualisieren",
    },
    import: {
      action: {
        download_error_report: "Fehlerbericht herunterladen",
        import: "Importieren",
        import_another: "Weitere Datei importieren",
      },
      error: {
        unable: "Diese Datei kann nicht importiert werden.",
      },
      idle: {
        description_1:
          "Du kannst Benutzer, Unternehmen, Kontakte, Notizen und Aufgaben importieren.",
        description_2:
          "Die Daten müssen als JSON-Datei nach folgendem Beispiel vorliegen:",
      },
      status: {
        all_success: "Alle Datensätze wurden erfolgreich importiert.",
        complete: "Import abgeschlossen.",
        failed: "Fehlgeschlagen",
        imported: "Importiert",
        in_progress: "Import läuft, bitte diese Seite nicht verlassen.",
        some_failed: "Einige Datensätze wurden nicht importiert.",
        table_caption: "Importstatus",
      },
      title: "Aus JSON importieren",
    },
    settings: {
      about: "Über",
      companies: {
        sectors: "Branchen",
      },
      dark_mode_logo: "Logo (Dark Mode)",
      deals: {
        categories: "Kategorien",
        currency: "Währung",
        pipeline_help:
          "Wähle, welche Deal-Phasen als Pipeline-Deals zählen sollen.",
        pipeline_statuses: "Pipeline-Status",
        stages: "Phasen",
      },
      light_mode_logo: "Logo (Light Mode)",
      notes: {
        statuses: "Status",
      },
      reset_defaults: "Auf Standard zurücksetzen",
      save_error: "Konfiguration konnte nicht gespeichert werden",
      saved: "Konfiguration gespeichert",
      saving: "Wird gespeichert…",
      tasks: {
        types: "Typen",
      },
      preferences: "Einstellungen",
      title: "Einstellungen",
      app_title: "App-Titel",
      sections: {
        branding: "Branding",
      },
      validation: {
        duplicate: "Doppelte %{display_name}: %{items}",
        in_use:
          "%{display_name} können nicht entfernt werden, solange Deals sie verwenden: %{items}",
        validating: "Wird geprüft…",
        entities: {
          categories: "Kategorien",
          stages: "Phasen",
        },
      },
    },
    theme: {
      dark: "Dunkel",
      label: "Design",
      light: "Hell",
      system: "System",
    },
    language: "Sprache",
    navigation: {
      label: "CRM-Navigation",
    },
    profile: {
      add_secondary_email: "E-Mail hinzufügen",
      email_taken: "%{email} wird bereits von einem anderen Benutzer verwendet",
      no_secondary_emails: "Keine",
      secondary_email_invalid: "%{email} ist keine gültige E-Mail-Adresse",
      secondary_email_is_primary: "%{email} ist bereits deine Hauptadresse",
      secondary_email_taken:
        "%{email} wird bereits von einem anderen Benutzer verwendet",
      too_many_secondary_emails:
        "Du kannst maximal 10 weitere E-Mail-Adressen hinzufügen",
      secondary_emails_help:
        "Weitere Adressen, von denen du E-Mails sendest. Leer lassen, um eine zu entfernen.",
      inbound: {
        description:
          "Sende E-Mails an die Inbound-Adresse deines Servers, z. B. im Feld %{field}. Das CRM verarbeitet die E-Mails und legt Notizen bei den passenden Kontakten an.",
        title: "Eingehende E-Mails",
      },
      mcp: {
        title: "MCP-Server",
        description:
          "Verbinde deinen KI-Assistenten über diese URL per Model Context Protocol (MCP) mit deinen CRM-Daten.",
      },
      password: {
        change: "Passwort ändern",
      },
      password_reset_sent:
        "Eine E-Mail zum Zurücksetzen des Passworts wurde an deine Adresse gesendet",
      record_not_found: "Datensatz nicht gefunden",
      title: "Profil",
      updated: "Dein Profil wurde aktualisiert",
      update_error: "Ein Fehler ist aufgetreten. Bitte erneut versuchen",
    },
    validation: {
      invalid_url: "Muss eine gültige URL sein",
      invalid_linkedin_url: "URL muss von linkedin.com stammen",
    },
  },
} satisfies CrmMessages;
