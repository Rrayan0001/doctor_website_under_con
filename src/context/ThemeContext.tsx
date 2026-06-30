"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Clear any previously saved theme preferences and default to light mode
    localStorage.removeItem("theme");
    
    // Explicitly remove the dark class from the root html element
    document.documentElement.classList.remove("dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    // No-op: theme toggle feature is disabled
  };

  // Prevent flash by only rendering children after mount
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
