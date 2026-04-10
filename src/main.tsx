import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// The '!' tells TypeScript that we are certain the #root element exists.
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter basename="/portfolio-/">
      <App />
    </BrowserRouter>
  </StrictMode>
);