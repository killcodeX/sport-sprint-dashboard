import React, { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export default function ThemeChange() {
  const [theme, setTheme] = useState("light");
  const [showOptions, setShowOptions] = useState(true);

  const handleThemeChange = (pref: string) => {
    if (pref === "light") {
      setTheme("light");
    } else if (pref === "dark") {
      setTheme("dark");
    } else if (pref === "system") {
      setTheme("system");
    }
  };
  return (
    <div className="themeChange">
      <div className="current-theme btn btn-active-light-primary">
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </div>
      {showOptions ? (
        <div className="theme-options">
          <div
            className={`theme-option ${theme === "light" ? "active" : null}`}
            onClick={() => handleThemeChange("light")}
          >
            <span className="icon">
              <BsSun />
            </span>{" "}
            Light
          </div>
          <div
            className={`theme-option ${theme === "dark" ? "active" : null}`}
            onClick={() => handleThemeChange("dark")}
          >
            <span className="icon">
              <BsMoon />
            </span>{" "}
            Dark
          </div>
          <div
            className={`theme-option ${theme === "system" ? "active" : null}`}
            onClick={() => handleThemeChange("system")}
          >
            <span className="icon">
              <HiOutlineComputerDesktop />
            </span>{" "}
            System
          </div>
        </div>
      ) : null}
    </div>
  );
}
