import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

if (navigator.serviceWorker) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((reg) =>
        console.log("Service Worker Working for scope:", reg.scope)
      )
      .catch((err) => console.log("Service worker is not working", err));
  });
}

ReactDOM.hydrate(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
