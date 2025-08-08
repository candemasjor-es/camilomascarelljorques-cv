// src/sections/Skills.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Stack,
    Chip,
    Tooltip,
} from "@mui/material";
import { motion as Motion, useInView } from "framer-motion";
import SkillIcon from "../components/SkillIcon";

const categoryIcons = {
    Frontend: "🖼️",
    Backend: "🧠",
    "Bases de datos": "🗃️",
    Herramientas: "🧰",
    Otros: "📦",
};

export default function Skills() {
    const [groupedSkills, setGroupedSkills] = useState({});
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        axios.get("https://cv-api-n6p0.onrender.com/api/skills").then((res) => {
            const grouped = res.data.reduce((acc, skill) => {
                const category = skill.category || "Otros";
                if (!acc[category]) acc[category] = [];
                acc[category].push(skill);
                return acc;
            }, {});
            setGroupedSkills(grouped);
        });
    }, []);

    return (
        <Box ref={ref} sx={{ px: { xs: 2, md: 4 }, mt: 6 }}>
            <Motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    🛠️ Habilidades Técnicas
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
                    {Object.entries(groupedSkills).map(([category, skills]) => (
                        <Card
                            key={category}
                            elevation={3}
                            sx={{ borderRadius: 3 }}
                        >
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
                                    {categoryIcons[category] || "📦"} {category}
                                </Typography>

                                <Stack
                                    direction="row"
                                    spacing={1}
                                    flexWrap="wrap"
                                >
                                    {skills.map((skill) => (
                                        <Tooltip
                                            key={skill._id || skill.name}
                                            title={skill.name}
                                        >
                                            <Chip
                                                label={skill.name}
                                                icon={
                                                    <SkillIcon
                                                        skill={skill.name}
                                                    />
                                                }
                                                variant="outlined"
                                                sx={{
                                                    mb: 1,
                                                    px: 1.2,
                                                    fontSize: "0.85rem",
                                                    borderRadius: 2,
                                                    bgcolor:
                                                        "background.default",
                                                }}
                                            />
                                        </Tooltip>
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Motion.div>
        </Box>
    );
}
