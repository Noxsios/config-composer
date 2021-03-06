import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "@elastic/eui/dist/eui_theme_dark.css";
import "react-toastify/dist/ReactToastify.css";
import "./printStyle.css";
import { initDB } from "react-indexed-db";
import { _DBConfig } from "./history/_DBConfig";

initDB(_DBConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
