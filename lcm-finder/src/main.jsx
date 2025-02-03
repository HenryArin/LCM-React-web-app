import React from "react";
import ReactDOM from "react-dom/client"; // FIXED: Ensure using React 18+ correct import
import "./index.css";
import LCM from "./lcm"; // Ensure LCM.js exists in the same directory

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LCM />
  </React.StrictMode>
);
