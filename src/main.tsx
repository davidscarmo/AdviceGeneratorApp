import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import axe from "@axe-core/react";

if (import.meta.env.DEV) {
  axe(React, ReactDOM, 1000);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
