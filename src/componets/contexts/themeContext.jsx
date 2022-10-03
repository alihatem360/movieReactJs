import { createContext } from "react";
import React, { useState } from "react";

export const ThemeContext = createContext();

const [themeValue, setThemeValue] = useState({ color: "light" });

const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ themeValue, setThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
