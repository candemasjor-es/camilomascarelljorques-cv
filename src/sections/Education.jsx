// src/sections/Education.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
    Box,
    Typography,
    Divider,
    Card,
    CardContent,
    Stack,
} from "@mui/material";
import { motion as Motion, useInView } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [groupedEducation, setGroupedEducation] = useState({});

    useEffect(() => {
        axios
            .get("https://cv-api-n6p0.onrender.com/api/education")
            .then((res) => {
                const grouped = res.data.reduce((acc, edu) => {
                    const year = edu.startDate?.split(" ").pop() || "Otros";
                    if (!acc[year]) acc[year] = [];
                    acc[year].push(edu);
                    return acc;
                }, {});
                setGroupedEducation(grouped);
            });
    }, []);

    const sortedYears = Object.keys(groupedEducation).sort((a, b) => b - a);

    return (
        <Box ref={ref} sx={{ px: { xs: 2, md: 4 }, mt: 6 }}>
            <Motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ textAlign: "center" }}
                >
                    🎓 Educación
                </Typography>
                <Divider sx={{ mb: 4 }} />

                {sortedYears.map((year) => (
                    <Box key={year} sx={{ mb: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{ color: "primary.main", mb: 2 }}
                        >
                            {year}
                        </Typography>
                        <Stack spacing={2}>
                            {groupedEducation[year].map((edu) => (
                                <Card
                                    key={edu._id}
                                    elevation={2}
                                    sx={{ borderRadius: 2 }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight="bold"
                                            gutterBottom
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                            }}
                                        >
                                            <SchoolIcon fontSize="small" />
                                            {edu.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {edu.institution} — {edu.location}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mt: 0.5 }}
                                        >
                                            {edu.startDate} — {edu.endDate}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </Box>
                ))}
            </Motion.div>
        </Box>
    );
}
