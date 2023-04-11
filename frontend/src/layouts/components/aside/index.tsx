import React, { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

export default function Aside() {
  const [asideClose, setAsideClose] = useState(false);
  const handleAsideClose = () => {
    if (asideClose) {
      document.documentElement.style.setProperty(
        "--appside-bar-width",
        "15rem"
      );
    } else {
      document.documentElement.style.setProperty("--appside-bar-width", "5rem");
    }
    setAsideClose(!asideClose);
  };

  return (
    <div className="aside">
      <div className="container">
        {asideClose ? (
          <div className="logo">S</div>
        ) : (
          <div className="logo">Sports Stride</div>
        )}
        {asideClose ? (
          <div
            className="aside-close btn btn-icon btn-color-muted shadow-lg"
            onClick={handleAsideClose}
          >
            <BsChevronDoubleRight />
          </div>
        ) : (
          <div
            className="aside-close btn btn-icon btn-color-muted shadow-lg"
            onClick={handleAsideClose}
          >
            <BsChevronDoubleLeft />
          </div>
        )}
        <div className="horizontal-line"></div>
      </div>
    </div>
  );
}
