import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import { ThemeProvider } from "./app/ThemeContext";

import "./sass/main.scss";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
