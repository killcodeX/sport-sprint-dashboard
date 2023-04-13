import React from "react";

export default function MobileAside() {
  return (
    <div className="mobile-aside">
      <div className="container">
        <div data-cy="logo" className="logo">
          Sports Sprint
        </div>
        <div
            data-cy="aside-button-open"
            className="mobile-aside-close icon btn btn-icon btn-color-muted shadow-lg"
            // onClick={handleAsideClose}
          ></div>
        <div className="horizontal-line"></div>
      </div>
    </div>
  );
}
