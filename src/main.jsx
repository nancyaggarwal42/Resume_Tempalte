import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ResumeContext from "./context/ResumeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResumeContext>
      <App />
    </ResumeContext>
  </StrictMode>
);
