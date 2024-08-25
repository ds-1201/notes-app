import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NotesProvider } from "./context/notesContext/NotesContext";
import { UIProvider } from "./context/uiContext/UIContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UIProvider>
      <NotesProvider>
        <App />
      </NotesProvider>
    </UIProvider>
  </React.StrictMode>
);
