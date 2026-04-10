import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Add this
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* The basename must match your repo name exactly */}
    <BrowserRouter basename="/portfolio-/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
