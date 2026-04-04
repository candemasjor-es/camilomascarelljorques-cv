// src/components/LanguageToggle.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

export default function LanguageToggle() {
    const { i18n } = useTranslation();

    const toggleLang = () => {
        const newLang = i18n.language === "es" ? "en" : "es";
        i18n.changeLanguage(newLang);
    };

    return (
        <Button
            onClick={toggleLang}
            variant="outlined"
            size="small"
            sx={{ ml: 2, textTransform: "none", minWidth: 40 }}
        >
            {i18n.language === "es" ? "EN" : "ES"}
        </Button>
    );
}
