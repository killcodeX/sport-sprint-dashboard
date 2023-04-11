import React from "react";
import Layout from "./layouts";
import Home from "./modules/home";

function App() {
  return (
    <>
      {" "}
      <Layout />
      <div className="app-wrapper">
      <Home />
      </div>
    </>
  );
}

export default App;
