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

export default function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <Box ref={ref} sx={{ p: 2 }}>
            <Motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Typography variant="h4" gutterBottom>
                    📘 Sobre mí
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
                        💻 Especialista en desarrollo multimedia y web con más
                        de 3 años de experiencia. También experto en informática
                        y telecomunicaciones.
                    </Typography>
                    <Typography paragraph align="center">
                        🧏‍♂️ Como persona sorda, agradezco que la comunicación se
                        realice a través de mensajes o correos electrónicos.
                    </Typography>
                    <Typography paragraph align="center">
                        📅 Para concertar una entrevista, ruego me avisen con al
                        menos 48 horas de antelación para poder gestionar la
                        solicitud de intérprete.
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
