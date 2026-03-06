import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Quotes from "./quotes.jsx";
import { Analytics } from "@vercel/analytics/next";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Quotes />
    <Analytics />
  </StrictMode>,
);
