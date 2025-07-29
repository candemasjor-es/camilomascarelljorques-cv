// src/sections/Practices.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Box, Typography, Card, CardContent, List } from "@mui/material";
import { motion, useInView } from "framer-motion";
import PracticeItem from "../components/PracticeItem";

export default function Practices() {
    const [practicesByYear, setPracticesByYear] = useState({});
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        axios
            .get("https://cv-api-n6p0.onrender.com/api/practices")
            .then((res) => {
                const grouped = res.data.reduce((acc, item) => {
                    const year = item.startDate?.split(" ").pop();
                    if (!acc[year]) acc[year] = [];
                    acc[year].push(item);
                    return acc;
                }, {});
                setPracticesByYear(grouped);
            })
            .catch((err) => {
                console.error("Error al cargar prácticas:", err);
            });
    }, []);

    const sortedYears = Object.keys(practicesByYear).sort((a, b) => b - a);

    return (
        <Box ref={ref} sx={{ px: { xs: 2, md: 4 }, mt: 6 }}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    🧪 Prácticas Formativas
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gap: 3,
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr",
                        },
                    }}
                >
                    {sortedYears.map((year) => (
                        <Card key={year} elevation={3} sx={{ borderRadius: 3 }}>
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mb: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        fontWeight: 600,
                                        color: "text.secondary",
                                    }}
                                >
                                    📅 {year}
                                </Typography>
                                <List disablePadding>
                                    {practicesByYear[year].map((practice) => (
                                        <PracticeItem
                                            key={practice._id}
                                            practice={practice}
                                        />
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </motion.div>
        </Box>
    );
}
