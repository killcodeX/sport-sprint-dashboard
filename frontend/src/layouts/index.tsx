import React from "react";
import Aside from "./components/aside";
import Header from "./components/header"

export default function Menu() {
  return (
    <div className="app-menu">
      <Aside />
      <Header/>
    </div>
  );
}
