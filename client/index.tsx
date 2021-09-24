import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.hydrate(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
