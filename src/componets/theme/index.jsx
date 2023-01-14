import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./style.css";
const Theme = () => {
  const { themeValue, setThemeValue } = useContext(ThemeContext);

  const handleTheme = () => {
    if (themeValue === "light") {
      setThemeValue("dark");
    } else {
      setThemeValue("light");
    }
  };
  return (
    <div className="" id="theme">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={handleTheme}
        />

        <label className="form-check-label " htmlFor="flexSwitchCheckDefault">
          {themeValue === "light" ? (
            <i class="fa-solid fa-sun "></i>
          ) : (
            <i class="fa-solid fa-moon"></i>
          )}
        </label>
      </div>
    </div>
  );
};

export default Theme;
