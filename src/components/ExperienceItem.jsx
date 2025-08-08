// src/components/ExperienceItem.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import {
    Paper,
    Typography,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

export default function ExperienceItem({ exp, delay = 0 }) {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                <ListItem alignItems="flex-start" disableGutters>
                    <ListItemIcon sx={{ color: "primary.main", mt: 1 }}>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                component="div"
                            >
                                {exp.position}
                            </Typography>
                        }
                        secondary={
                            <>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    component="div"
                                >
                                    {exp.company} – {exp.location}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mt: 0.5 }}
                                    component="div"
                                >
                                    {exp.startDate} — {exp.endDate}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mt: 1, whiteSpace: "pre-line" }}
                                    component="div"
                                >
                                    {exp.description}
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
            </Paper>
        </Motion.div>
    );
}
