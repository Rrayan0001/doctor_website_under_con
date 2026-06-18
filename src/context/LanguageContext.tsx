"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "../locales/en";
import { kn } from "../locales/kn";

type Language = "en" | "kn";
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
    if (savedLang === "en" || savedLang === "kn") {
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

  const t = language === "en" ? en : kn;

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
