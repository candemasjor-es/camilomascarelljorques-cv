import { createTheme } from "@mui/material/styles";

export default function getTheme(mode) {
    return createTheme({
        palette: {
            mode,
            primary: {
                main: mode === "light" ? "#1976d2" : "#90caf9", // Azul claro
            },
            secondary: {
                main: mode === "light" ? "#f50057" : "#f48fb1", // Rosa
            },
            background: {
                default: mode === "light" ? "#f5f5f5" : "#121212",
                paper: mode === "light" ? "#ffffff" : "#1e1e1e",
            },
        },
        typography: {
            fontFamily: "Roboto, sans-serif",
        },
    });
}
