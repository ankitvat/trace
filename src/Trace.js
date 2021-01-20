import React from "react";
import "./trace.scss";
import Header from "./header.js";

import Main from "./Main.js";
import Journey from "./Journey.js";

export default function Trace() {
  return (
    <div className="trace">
      <Header />

      <Main />
      <Journey />
    </div>
  );
}
