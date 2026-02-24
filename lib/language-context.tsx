"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Language } from "./translations";

type TranslationType = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "ashram-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
    }
    setIsHydrated(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  const t = translations[language];

  // Prevent hydration mismatch by showing default language until hydrated
  if (!isHydrated) {
    return (
      <LanguageContext.Provider
        value={{ language: "en", setLanguage, t: translations.en }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
