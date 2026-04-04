// src/sections/AboutMe.jsx
import React, { useRef } from "react";
import {
    Container,
    Typography,
    Paper,
    Box,
    Avatar,
    Button,
} from "@mui/material";
import { motion as Motion, useInView } from "framer-motion";
import avatar from "../assets/avatar.jpeg";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const { t } = useTranslation();

    return (
        <Box ref={ref} sx={{ p: 2 }}>
            <Motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Typography variant="h4" gutterBottom>
                    📘 {t("about.title")}
                </Typography>

                <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            mb: 3,
                        }}
                    >
                        <Avatar
                            alt="Camilo Mascarell"
                            src={avatar}
                            sx={{ width: 120, height: 120, mb: 2 }}
                        />
                    </Box>

                    <Typography paragraph align="center">
                        💻 {t("about.professional")}
                    </Typography>
                    <Typography paragraph align="center">
                        🧏‍♂️ {t("about.communication")}
                    </Typography>
                    <Typography paragraph align="center">
                        📅 {t("about.interview_notice")}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 3,
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            href="mailto:camilomascarelljorques@gmail.com"
                            sx={{ textTransform: "none", fontWeight: "bold" }}
                        >
                            Contactar
                        </Button>
                    </Box>
                </Paper>
            </Motion.div>
        </Box>
    );
}
