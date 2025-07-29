import React, {
    createContext,
    useMemo,
    useState,
    useContext,
    useEffect,
} from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Creamos el contexto
const ThemeContext = createContext();

// Hook personalizado
export function useThemeContext() {
    return useContext(ThemeContext);
}

export default function CustomThemeProvider({ children }) {
    // Leer modo desde localStorage o usar "light" por defecto
    const [mode, setMode] = useState(() => {
        return localStorage.getItem("themeMode") || "light";
    });

    // Guardar modo cada vez que cambie
    useEffect(() => {
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    // Alternar modo
    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    // Crear el tema (reacciona solo si cambia `mode`)
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
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
