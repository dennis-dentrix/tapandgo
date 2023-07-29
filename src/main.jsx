import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./App.scss";
import { AppProvider } from "./context/manageState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
