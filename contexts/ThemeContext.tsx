import React, { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Define the theme context type
interface ThemeContextType {
  theme: "dark" | "light" | null; // "null" represents system default
  isDarkTheme: boolean; // Add isDarkTheme
  toggleTheme: () => void;
}

// Create a ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const SystemThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isInitialThemeSet, setIsInitialThemeSet] = useState<boolean>(false);
  const { theme: nextTheme, setTheme } = useTheme();
  const [theme, setInternalTheme] = useState<"dark" | "light" | null>(null);

  // Check system theme initially
  useEffect(() => {
    if (isInitialThemeSet) return;
    if (nextTheme === "light" || nextTheme === "dark") {
      setInternalTheme(nextTheme);
      setIsInitialThemeSet(true);
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setInternalTheme(isDark ? "dark" : "light");
      setTheme(isDark ? "dark" : "light");
      setIsInitialThemeSet(true);
    }
  }, [isInitialThemeSet, nextTheme, setTheme]);

  const mqListener = (e: {
    matches: boolean | ((prevState: boolean) => boolean);
  }) => {
    setInternalTheme(e.matches ? "dark" : "light");
    setTheme(e.matches ? "dark" : "light");
  };

  useEffect(() => {
    // Listen for changes to the system theme
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener(mqListener);

    return () => {
      darkThemeMq.removeListener(mqListener);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === "dark" || theme === null) {
      setInternalTheme("light");
      setTheme("light");
    } else {
      setInternalTheme("dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    if (nextTheme === "light" || nextTheme === "dark") {
      setInternalTheme(nextTheme);
    }
  }, [nextTheme]);

  const contextValue: ThemeContextType = {
    theme,
    isDarkTheme: theme === "dark" || (theme === null && nextTheme === "dark"),
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
