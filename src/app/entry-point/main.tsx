import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/reset.css";
import "../styles/index.css";
import { Router } from "../router/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
