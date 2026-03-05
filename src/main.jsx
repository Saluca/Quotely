import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Quotes from "./quotes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Quotes />
  </StrictMode>,
);
