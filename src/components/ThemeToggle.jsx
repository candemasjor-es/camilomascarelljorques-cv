import React from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../theme/ThemeContext";

export default function ThemeToggle() {
    const { mode, toggleTheme } = useThemeContext();

    return (
        <IconButton
            color="inherit"
            onClick={toggleTheme}
            sx={{
                ml: 1,
                transition: "transform 0.3s ease",
                "&:hover": {
                    transform: "rotate(20deg)",
                    color: (theme) =>
                        mode === "light"
                            ? theme.palette.secondary.main
                            : theme.palette.primary.main,
                },
            }}
        >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
}
