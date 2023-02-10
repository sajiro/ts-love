import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./theme/ThemeContext";
import { ToggleDarkMode } from "./theme/ToggleDarkMode";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToggleDarkMode />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
