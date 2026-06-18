"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "../locales/en";
import { kn } from "../locales/kn";
import { hi } from "../locales/hi";

type Language = "en" | "kn" | "hi";
type TranslationType = typeof en;

interface LanguageContextProps {
  language: Language;
  t: TranslationType;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // Load language preference from local storage if available
  useEffect(() => {
    const savedLang = localStorage.getItem("doctor_portfolio_lang") as Language;
    if (savedLang === "en" || savedLang === "kn" || savedLang === "hi") {
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
    } else {
      document.documentElement.lang = "en";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("doctor_portfolio_lang", lang);
    document.documentElement.lang = lang;
  };

  const getTranslation = (lang: Language) => {
    if (lang === "kn") return kn;
    if (lang === "hi") return hi;
    return en;
  };

  const t = getTranslation(language);

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
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
