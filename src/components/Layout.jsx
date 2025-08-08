import React from "react";
import { Container, Box } from "@mui/material";

export default function Layout({ children }) {
    return (
        <Container maxWidth="md" disableGutters sx={{ py: 4 }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    px: { xs: 1, sm: 4 },
                }}
            >
                {children}
            </Box>
        </Container>
    );
}
