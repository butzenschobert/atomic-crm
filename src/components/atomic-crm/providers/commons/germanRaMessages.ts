import type { TranslationMessages } from "ra-core";

/**
 * German translation of the react-admin core messages (ra-language-english
 * 5.x key set) and of the ra-supabase auth messages. Kept in-repo because the
 * published `ra-language-german` package targets react-admin 3 and misses
 * most of the current keys.
 */
export const germanRaMessages: TranslationMessages = {
  ra: {
    action: {
      add_filter: "Filter hinzufügen",
      add: "Hinzufügen",
      back: "Zurück",
      bulk_actions:
        "1 Element ausgewählt |||| %{smart_count} Elemente ausgewählt",
      cancel: "Abbrechen",
      clear_array_input: "Liste leeren",
      clear_input_value: "Wert löschen",
      clone: "Duplizieren",
      confirm: "Bestätigen",
      create: "Anlegen",
      create_item: "%{item} anlegen",
      delete: "Löschen",
      edit: "Bearbeiten",
      export: "Exportieren",
      list: "Liste",
      refresh: "Aktualisieren",
      remove_filter: "Diesen Filter entfernen",
      remove_all_filters: "Alle Filter entfernen",
      remove: "Entfernen",
      reset: "Zurücksetzen",
      save: "Speichern",
      search: "Suchen",
      search_columns: "Spalten durchsuchen",
      select_all: "Alle auswählen",
      select_all_button: "Alle auswählen",
      select_row: "Diese Zeile auswählen",
      show: "Anzeigen",
      sort: "Sortieren",
      undo: "Rückgängig",
      unselect: "Auswahl aufheben",
      expand: "Aufklappen",
      close: "Schließen",
      open_menu: "Menü öffnen",
      close_menu: "Menü schließen",
      update: "Aktualisieren",
      move_up: "Nach oben",
      move_down: "Nach unten",
      open: "Öffnen",
      toggle_theme: "Hell/Dunkel umschalten",
      select_columns: "Spalten",
      update_application: "Anwendung neu laden",
    },
    boolean: {
      true: "Ja",
      false: "Nein",
      null: " ",
    },
    page: {
      create: "%{name} anlegen",
      dashboard: "Dashboard",
      edit: "%{name} %{recordRepresentation}",
      error: "Etwas ist schiefgelaufen",
      list: "%{name}",
      loading: "Lädt",
      not_found: "Nicht gefunden",
      show: "%{name} %{recordRepresentation}",
      empty: "Noch keine %{name}.",
      invite: "Möchtest du eins anlegen?",
      access_denied: "Zugriff verweigert",
      authentication_error: "Authentifizierungsfehler",
    },
    input: {
      file: {
        upload_several:
          "Dateien hierher ziehen oder klicken, um sie auszuwählen.",
        upload_single: "Datei hierher ziehen oder klicken, um sie auszuwählen.",
      },
      image: {
        upload_several:
          "Bilder hierher ziehen oder klicken, um sie auszuwählen.",
        upload_single: "Bild hierher ziehen oder klicken, um es auszuwählen.",
      },
      references: {
        all_missing: "Referenzdaten konnten nicht gefunden werden.",
        many_missing:
          "Mindestens eine der verknüpften Referenzen scheint nicht mehr verfügbar zu sein.",
        single_missing:
          "Die verknüpfte Referenz scheint nicht mehr verfügbar zu sein.",
      },
      password: {
        toggle_visible: "Passwort verbergen",
        toggle_hidden: "Passwort anzeigen",
      },
    },
    message: {
      about: "Über",
      access_denied: "Du hast keine Berechtigung für diese Seite",
      are_you_sure: "Bist du sicher?",
      authentication_error:
        "Der Authentifizierungsserver hat einen Fehler zurückgegeben. Deine Zugangsdaten konnten nicht geprüft werden.",
      auth_error: "Fehler bei der Prüfung des Authentifizierungs-Tokens.",
      bulk_delete_content:
        "Möchtest du %{name} wirklich löschen? |||| Möchtest du diese %{smart_count} Elemente wirklich löschen?",
      bulk_delete_title: "%{name} löschen |||| %{smart_count} %{name} löschen",
      bulk_update_content:
        "Möchtest du %{name} %{recordRepresentation} wirklich aktualisieren? |||| Möchtest du diese %{smart_count} Elemente wirklich aktualisieren?",
      bulk_update_title:
        "%{name} %{recordRepresentation} aktualisieren |||| %{smart_count} %{name} aktualisieren",
      clear_array_input: "Möchtest du wirklich die gesamte Liste leeren?",
      delete_content: "Möchtest du %{name} wirklich löschen?",
      delete_title: "%{name} %{recordRepresentation} löschen",
      details: "Details",
      error:
        "Ein Client-Fehler ist aufgetreten. Deine Anfrage konnte nicht abgeschlossen werden.",
      invalid_form: "Das Formular ist ungültig. Bitte prüfe die Eingaben",
      loading: "Bitte warten",
      no: "Nein",
      not_found:
        "Entweder ist die URL falsch oder du bist einem ungültigen Link gefolgt.",
      select_all_limit_reached:
        "Zu viele Elemente für „Alle auswählen“. Nur die ersten %{max} Elemente wurden ausgewählt.",
      unsaved_changes:
        "Einige Änderungen wurden nicht gespeichert. Möchtest du sie wirklich verwerfen?",
      yes: "Ja",
      placeholder_data_warning:
        "Netzwerkproblem: Daten konnten nicht aktualisiert werden.",
    },
    navigation: {
      clear_filters: "Filter löschen",
      no_filtered_results: "Keine %{name} mit den aktuellen Filtern gefunden.",
      no_results: "Keine %{name} gefunden",
      no_more_results:
        "Seite %{page} liegt außerhalb des Bereichs. Versuche die vorherige Seite.",
      page_out_of_boundaries: "Seite %{page} außerhalb des Bereichs",
      page_out_from_end: "Letzte Seite erreicht",
      page_out_from_begin: "Erste Seite erreicht",
      page_range_info: "%{offsetBegin}–%{offsetEnd} von %{total}",
      partial_page_range_info:
        "%{offsetBegin}–%{offsetEnd} von mehr als %{offsetEnd}",
      current_page: "Seite %{page}",
      page: "Zu Seite %{page}",
      first: "Zur ersten Seite",
      last: "Zur letzten Seite",
      next: "Zur nächsten Seite",
      previous: "Zur vorherigen Seite",
      page_rows_per_page: "Zeilen pro Seite:",
      skip_nav: "Zum Inhalt springen",
    },
    sort: {
      sort_by: "Sortieren nach %{field_lower_first} %{order}",
      ASC: "aufsteigend",
      DESC: "absteigend",
    },
    auth: {
      auth_check_error: "Bitte anmelden, um fortzufahren",
      user_menu: "Profil",
      username: "Benutzername",
      password: "Passwort",
      email: "E-Mail",
      sign_in: "Anmelden",
      sign_in_error: "Anmeldung fehlgeschlagen, bitte erneut versuchen",
      logout: "Abmelden",
    },
    notification: {
      updated: "Element aktualisiert |||| %{smart_count} Elemente aktualisiert",
      created: "Element angelegt",
      deleted: "Element gelöscht |||| %{smart_count} Elemente gelöscht",
      bad_item: "Ungültiges Element",
      item_doesnt_exist: "Element existiert nicht",
      http_error: "Kommunikationsfehler mit dem Server",
      data_provider_error: "dataProvider-Fehler. Details in der Konsole.",
      i18n_error:
        "Übersetzungen für die gewählte Sprache konnten nicht geladen werden",
      canceled: "Aktion abgebrochen",
      logged_out: "Deine Sitzung ist abgelaufen, bitte erneut anmelden.",
      not_authorized:
        "Du bist nicht berechtigt, auf diese Ressource zuzugreifen.",
      application_update_available: "Eine neue Version ist verfügbar.",
      offline: "Keine Verbindung. Daten konnten nicht geladen werden.",
    },
    validation: {
      required: "Pflichtfeld",
      minLength: "Mindestens %{min} Zeichen",
      maxLength: "Höchstens %{max} Zeichen",
      minValue: "Mindestens %{min}",
      maxValue: "Höchstens %{max}",
      number: "Muss eine Zahl sein",
      email: "Muss eine gültige E-Mail-Adresse sein",
      oneOf: "Muss einer der folgenden Werte sein: %{options}",
      regex: "Muss einem bestimmten Format entsprechen (RegExp): %{pattern}",
      unique: "Muss eindeutig sein",
    },
    saved_queries: {
      label: "Gespeicherte Abfragen",
      query_name: "Name der Abfrage",
      new_label: "Aktuelle Abfrage speichern…",
      new_dialog_title: "Aktuelle Abfrage speichern als",
      remove_label: "Gespeicherte Abfrage entfernen",
      remove_label_with_name: "Abfrage „%{name}“ entfernen",
      remove_dialog_title: "Gespeicherte Abfrage entfernen?",
      remove_message:
        "Möchtest du diese Abfrage wirklich aus deiner Liste entfernen?",
      help: "Liste filtern und diese Abfrage für später speichern",
    },
    guesser: {
      empty: {
        title: "Keine Daten vorhanden",
        message: "Bitte prüfe deinen Data Provider",
      },
    },
    configurable: {
      customize: "Anpassen",
      configureMode: "Diese Seite konfigurieren",
      inspector: {
        title: "Inspektor",
        content: "Fahre über UI-Elemente, um sie zu konfigurieren",
        reset: "Einstellungen zurücksetzen",
        hideAll: "Alle ausblenden",
        showAll: "Alle einblenden",
      },
      Datagrid: {
        title: "Tabelle",
        unlabeled: "Unbenannte Spalte #%{column}",
      },
      SimpleForm: {
        title: "Formular",
        unlabeled: "Unbenanntes Feld #%{input}",
      },
      SimpleList: {
        title: "Liste",
        primaryText: "Primärtext",
        secondaryText: "Sekundärtext",
        tertiaryText: "Tertiärtext",
      },
    },
  },
};

export const raSupabaseGermanMessages = {
  "ra-supabase": {
    auth: {
      email: "E-Mail",
      confirm_password: "Passwort bestätigen",
      sign_in_with: "Anmelden mit %{provider}",
      forgot_password: "Passwort vergessen?",
      reset_password: "Passwort zurücksetzen",
      password_reset:
        "Prüfe dein E-Mail-Postfach auf eine Nachricht zum Zurücksetzen des Passworts.",
      missing_tokens: "Access- und Refresh-Token fehlen",
      back_to_login: "Zurück zur Anmeldung",
    },
    reset_password: {
      forgot_password: "Passwort vergessen?",
      forgot_password_details:
        "Gib deine E-Mail-Adresse ein, um Anweisungen zu erhalten.",
    },
    set_password: {
      new_password: "Wähle dein Passwort",
    },
    validation: {
      password_mismatch: "Passwörter stimmen nicht überein",
    },
    oauth: {
      authorize: "Anwendung autorisieren",
      authorize_details: "Diese Anwendung möchte auf dein Konto zugreifen.",
      access_scope:
        "Sie kann deine Daten lesen und ändern, mit denselben Rechten wie dein Konto.",
      approved: "Autorisierung erteilt",
      close_tab: "Du kannst diesen Tab jetzt schließen.",
      no_request: "Keine Autorisierungsanfrage gefunden",
    },
  },
};
