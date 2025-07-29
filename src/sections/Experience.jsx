import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Box, Typography, Divider, List } from "@mui/material";
import { motion, useInView } from "framer-motion";
import ExperienceItem from "../components/ExperienceItem";

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [groupedExperience, setGroupedExperience] = useState({});

    useEffect(() => {
        axios
            .get("https://cv-api-n6p0.onrender.com/api/experience")
            .then((res) => {
                const grouped = res.data.reduce((acc, exp) => {
                    const year = exp.startDate?.split(" ")[1] || "Otros";
                    if (!acc[year]) acc[year] = [];
                    acc[year].push(exp);
                    return acc;
                }, {});
                setGroupedExperience(grouped);
            })
            .catch((err) => console.error("Error al cargar experiencia:", err));
    }, []);

    return (
        <Box ref={ref} sx={{ p: 2 }}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h4" gutterBottom>
                    💼 Experiencia Profesional
                </Typography>
                <Divider sx={{ mb: 3 }} />

                {Object.entries(groupedExperience)
                    .sort((a, b) => b[0].localeCompare(a[0]))
                    .map(([year, experiences]) => (
                        <Box key={year} sx={{ mb: 4 }}>
                            <Typography
                                variant="h6"
                                sx={{ color: "primary.main" }}
                                gutterBottom
                            >
                                {year}
                            </Typography>
                            <List>
                                {experiences.map((exp, index) => (
                                    <ExperienceItem
                                        key={exp._id}
                                        exp={exp}
                                        delay={index * 0.1}
                                    />
                                ))}
                            </List>
                        </Box>
                    ))}
            </motion.div>
        </Box>
    );
}
