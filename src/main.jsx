// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppThemeProvider from "./theme/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppThemeProvider>
    </React.StrictMode>
);
