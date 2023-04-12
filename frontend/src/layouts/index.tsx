import React from "react";
import Aside from "./components/aside";
import Header from "./components/header";
import { useWindowSize } from "../helpers/useWindowSize"

export default function Menu() {
  let width = useWindowSize().width;
  console.log(width)
  return (
    <div className="app-menu">
     { width > 700?  <Aside />: null}
      <Header/>
    </div>
  );
}
