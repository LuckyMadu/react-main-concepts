import React from "react";
import ReactDOM from "react-dom";
import App from "./lesson03";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function tick() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

setInterval(tick, 1000);
