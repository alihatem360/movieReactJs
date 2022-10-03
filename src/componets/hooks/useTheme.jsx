import React, { useState } from "react";

const useTheme = () => {
  const [themeValue, setThemeValue] = useState("dark");
  return { themeValue, setThemeValue };
};

export default useTheme;
