import React, { useState, FC } from "react";

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState = {
  dark: false,
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);

type ThemeProviderProp = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProp) {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
