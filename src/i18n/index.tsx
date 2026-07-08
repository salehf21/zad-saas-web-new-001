import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { en } from "./locales/en";
import type { Messages } from "./locales/en";
import { ar } from "./locales/ar";
import { bg } from "./locales/bg";
import { de } from "./locales/de";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { it } from "./locales/it";
import { nl } from "./locales/nl";
import { pt } from "./locales/pt";
import { tr } from "./locales/tr";

export type LocaleCode = "en" | "ar" | "es" | "it" | "fr" | "bg" | "de" | "nl" | "pt" | "tr";

export interface LocaleInfo {
  code: LocaleCode;
  nativeName: string;
  englishName: string;
  dir: "ltr" | "rtl";
}

export const LOCALES: readonly LocaleInfo[] = [
  { code: "en", nativeName: "English", englishName: "English", dir: "ltr" },
  { code: "ar", nativeName: "العربية", englishName: "Arabic", dir: "rtl" },
  { code: "es", nativeName: "Español", englishName: "Spanish", dir: "ltr" },
  { code: "it", nativeName: "Italiano", englishName: "Italian", dir: "ltr" },
  { code: "fr", nativeName: "Français", englishName: "French", dir: "ltr" },
  { code: "bg", nativeName: "Български", englishName: "Bulgarian", dir: "ltr" },
  { code: "de", nativeName: "Deutsch", englishName: "German", dir: "ltr" },
  { code: "nl", nativeName: "Nederlands", englishName: "Dutch", dir: "ltr" },
  { code: "pt", nativeName: "Português", englishName: "Portuguese", dir: "ltr" },
  { code: "tr", nativeName: "Türkçe", englishName: "Turkish", dir: "ltr" }
];

const DICTIONARIES: Record<LocaleCode, Messages> = { en, ar, es, it, fr, bg, de, nl, pt, tr };

const STORAGE_KEY = "zad-locale";

function isLocaleCode(value: string | null): value is LocaleCode {
  return value !== null && LOCALES.some((locale) => locale.code === value);
}

/** Map navigator.languages onto the closest supported locale; English otherwise. */
export function detectLocale(): LocaleCode {
  const candidates = typeof navigator !== "undefined" ? navigator.languages ?? [navigator.language] : [];
  for (const candidate of candidates) {
    const prefix = candidate?.toLowerCase().split("-")[0];
    if (isLocaleCode(prefix)) {
      return prefix;
    }
  }
  return "en";
}

function storedLocale(): LocaleCode | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return isLocaleCode(value) ? value : null;
  } catch {
    return null;
  }
}

interface I18nValue {
  locale: LocaleCode;
  dir: "ltr" | "rtl";
  m: Messages;
  /** True until the visitor has confirmed a language (stored locally). */
  needsLanguageChoice: boolean;
  setLocale: (code: LocaleCode) => void;
  /** Keep the current (suggested) language and stop showing the popup. */
  confirmCurrentLocale: () => void;
}

const I18nContext = createContext<I18nValue>({
  locale: "en",
  dir: "ltr",
  m: en,
  needsLanguageChoice: false,
  setLocale: () => undefined,
  confirmCurrentLocale: () => undefined
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [stored] = useState(storedLocale);
  const [locale, setLocaleState] = useState<LocaleCode>(() => stored ?? detectLocale());
  const [needsLanguageChoice, setNeedsLanguageChoice] = useState(stored === null);

  const persist = useCallback((code: LocaleCode) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Storage unavailable (private mode) — selection still applies for this visit.
    }
  }, []);

  const setLocale = useCallback(
    (code: LocaleCode) => {
      setLocaleState(code);
      setNeedsLanguageChoice(false);
      persist(code);
    },
    [persist]
  );

  const confirmCurrentLocale = useCallback(() => {
    setNeedsLanguageChoice(false);
    persist(locale);
  }, [locale, persist]);

  const dir = LOCALES.find((entry) => entry.code === locale)?.dir ?? "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      dir,
      m: DICTIONARIES[locale],
      needsLanguageChoice,
      setLocale,
      confirmCurrentLocale
    }),
    [locale, dir, needsLanguageChoice, setLocale, confirmCurrentLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
