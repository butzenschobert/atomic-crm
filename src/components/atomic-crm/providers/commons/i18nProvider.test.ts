import { afterEach, describe, expect, it, vi } from "vitest";
import { getInitialLocale, i18nProvider } from "./i18nProvider";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("i18nProvider", () => {
  it("registers en, de and fr locales with english first", () => {
    expect(i18nProvider.getLocales?.()).toEqual([
      { locale: "en", name: "English" },
      { locale: "de", name: "Deutsch" },
      { locale: "fr", name: "Français" },
    ]);
  });

  it("translates the language key in german", async () => {
    await i18nProvider.changeLocale("de");

    expect(i18nProvider.translate("crm.language")).toBe("Sprache");
  });

  it("translates the language key in french", async () => {
    await i18nProvider.changeLocale("fr");

    expect(i18nProvider.translate("crm.language")).toBe("Langue");
  });

  it("falls back to english for unknown locales", async () => {
    await i18nProvider.changeLocale("es");

    expect(i18nProvider.translate("crm.language")).toBe("Language");
  });

  it("translates react-admin core keys in german", async () => {
    await i18nProvider.changeLocale("de");

    expect(i18nProvider.translate("ra.action.save")).toBe("Speichern");
    expect(
      i18nProvider.translate("ra-supabase.auth.sign_in_with", {
        provider: "Google",
      }),
    ).toBe("Anmelden mit Google");
  });

  it("uses customized password reset overrides for en and fr", async () => {
    await i18nProvider.changeLocale("en");
    expect(i18nProvider.translate("ra-supabase.auth.password_reset")).toBe(
      "Check your emails for a Reset Password message.",
    );

    await i18nProvider.changeLocale("fr");
    expect(i18nProvider.translate("ra-supabase.auth.password_reset")).toBe(
      "Consultez vos emails pour trouver le message de reinitialisation du mot de passe.",
    );
  });

  it("translates recently added fr crm keys", async () => {
    await i18nProvider.changeLocale("fr");

    expect(i18nProvider.translate("resources.deals.empty.title")).toBe(
      "Aucune affaire trouvée",
    );
  });

  it("starts in english whatever the browser language", () => {
    vi.stubGlobal("navigator", {
      language: "de-DE",
      languages: ["de-DE", "fr-FR"],
    });

    expect(getInitialLocale()).toBe("en");
  });
});
