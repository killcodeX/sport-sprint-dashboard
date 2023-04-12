import React from "react";
import { SlMenu } from "react-icons/sl";
import ThemeChange from "./themeChange";
import UserSettings from "./userSettings";
import { useWindowSize } from "../../../helpers/useWindowSize";

export default function Header() {
  let width = useWindowSize().width;
  return (
    <div className="header shadow-sm">
      <div className="header-container">
        <div className="header-left">
          {width < 700 ? (
            <>
              <div className="hamburger">
                <SlMenu />
              </div>
              <div className="logo-mobile">Sports</div>
            </>
          ) : null}
        </div>
        <div className="header-right">
          <ThemeChange />
          <UserSettings />
        </div>
      </div>
    </div>
  );
}
