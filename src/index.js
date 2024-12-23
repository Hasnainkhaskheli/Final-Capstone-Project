import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import App from "./App";


const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
