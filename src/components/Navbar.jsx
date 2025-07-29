// src/components/Navbar.jsx
import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { label: "Sobre mí", path: "/" },
    { label: "Experiencia", path: "/experience" },
    { label: "Prácticas", path: "/practices" },
    { label: "Educación", path: "/education" },
    { label: "Habilidades", path: "/skills" },
];

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

    const drawer = (
        <Box
            sx={{
                width: 250,
                bgcolor:
                    theme.palette.mode === "light"
                        ? "#fff"
                        : theme.palette.background.default,
                height: "100%",
            }}
            onClick={handleDrawerToggle}
        >
            <List>
                {navItems.map(({ label, path }) => (
                    <ListItem key={path} disablePadding>
                        <ListItemButton component={Link} to={path}>
                            <ListItemText
                                primary={label}
                                primaryTypographyProps={{
                                    fontWeight:
                                        location.pathname === path
                                            ? "bold"
                                            : "normal",
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    backgroundColor:
                        theme.palette.mode === "light" ? "#fff" : "#121212",
                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                }}
            >
                <Toolbar>
                    {isMobile && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: "bold" }}
                    >
                        Camilo Mascarell Jorques
                    </Typography>

                    {!isMobile && (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            {navItems.map(({ label, path }) => (
                                <Button
                                    key={path}
                                    component={Link}
                                    to={path}
                                    color={
                                        location.pathname === path
                                            ? "secondary"
                                            : "inherit"
                                    }
                                    sx={{
                                        textTransform: "none",
                                        mx: 1,
                                        fontWeight:
                                            location.pathname === path
                                                ? "bold"
                                                : "normal",
                                    }}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Box>
                    )}

                    <ThemeToggle />
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        bgcolor:
                            theme.palette.mode === "light"
                                ? "#fff"
                                : theme.palette.background.default,
                        color: theme.palette.mode === "light" ? "#000" : "#fff",
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}
