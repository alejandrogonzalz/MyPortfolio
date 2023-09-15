import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import { AppProvider } from "./app/AppContext";

import "./sass/main.scss";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <Router />
    </AppProvider>
  </React.StrictMode>
);
