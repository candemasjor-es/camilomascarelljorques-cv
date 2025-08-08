import React, { useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeContext } from "./ThemeContext";

export default function AppThemeProvider({ children }) {
    const [mode, setMode] = useState(() => {
        return localStorage.getItem("themeMode") || "light";
    });

    useEffect(() => {
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: { main: "#1976d2" },
                    secondary: { main: "#f50057" },
                },
                components: {
                    MuiCssBaseline: {
                        styleOverrides: {
                            body: {
                                transition:
                                    "background-color 0.3s ease, color 0.3s ease",
                            },
                        },
                    },
                },
            }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
}
