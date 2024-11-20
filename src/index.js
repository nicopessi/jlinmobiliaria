import React from "react";
import ReactDOM from "react-dom/client"; // Cambia a react-dom/client
import "./index.css";
import App from "./App";
import { PropertiesContextProvider } from "./context/PropertiesContext";

const root = ReactDOM.createRoot(document.getElementById("root")); // Crea la raíz
root.render(
  <React.StrictMode>
    <PropertiesContextProvider>
    <App />
    </PropertiesContextProvider>
  </React.StrictMode>
);

