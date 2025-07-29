import React, { useMemo, useState, createContext, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import getTheme from "./getTheme";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeProvider({ children }) {
    const [mode, setMode] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", mode);
    }, [mode]);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ColorModeContext.Provider>
    );
}
