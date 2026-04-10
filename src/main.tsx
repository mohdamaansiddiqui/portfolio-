import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Essential for routing
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* The basename is the key. Since your repo is 'portfolio-', 
      all routing needs to start from that path.
    */}
    <BrowserRouter basename="/portfolio-/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
