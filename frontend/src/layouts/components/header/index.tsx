import React from "react";
import { SlMenu } from "react-icons/sl";

export default function Header() {
  return (
    <div className="header shadow-sm">
      <div className="header-container">
        <div className="header-left">
          <div className="hamburger">
            <SlMenu />
          </div>
          <div className="logo-mobile">Sports</div>
        </div>
        <div className="header-right">Right</div>
      </div>
    </div>
  );
}
