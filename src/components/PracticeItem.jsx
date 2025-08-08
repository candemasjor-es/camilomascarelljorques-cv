// src/components/PracticeItem.jsx
import React from "react";
import { motion as Motion } from "framer-motion";
import {
    Paper,
    Typography,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

export default function PracticeItem({ practice }) {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                <ListItem alignItems="flex-start" disableGutters>
                    <ListItemIcon sx={{ color: "primary.main", mt: 1 }}>
                        <WorkOutlineIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                component="div"
                            >
                                {practice.position}
                            </Typography>
                        }
                        secondary={
                            <>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    component="div"
                                >
                                    {practice.company} – {practice.location}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mt: 0.5 }}
                                    component="div"
                                >
                                    {practice.startDate} — {practice.endDate}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mt: 1, whiteSpace: "pre-line" }}
                                    component="div"
                                >
                                    {practice.description}
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
            </Paper>
        </Motion.div>
    );
}
