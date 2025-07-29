import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    Font,
} from "@react-pdf/renderer";

// Registro fuente Roboto (opcional)
Font.register({
    family: "Roboto",
    fonts: [
        {
            src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf",
        }, // normal
        {
            src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.ttf",
            fontWeight: "bold",
        },
    ],
});

// Datos dinámicos (puedes extraerlo a un JSON aparte)
const data = {
    name: "Camilo Mascarell Jorques",
    photo: "avatar.jpg", // ruta relativa en public/
    email: "camilo@email.com",
    linkedin: "linkedin.com/in/camilo",
    about: "Soy desarrollador web con pasión por la tecnología, especializado en React, Node.js y MongoDB.",
    experience: [
        {
            role: "Desarrollador Fullstack",
            company: "Empresa X",
            years: "2022 - Actualidad",
            description:
                "Desarrollo de aplicaciones web modernas con React y Express.",
        },
    ],
    education: [
        {
            degree: "Grado en Ingeniería Informática",
            institution: "Universidad Politécnica de Valencia",
            years: "2020 - 2024",
        },
    ],
    skills: ["React", "Node.js", "MongoDB", "Git", "Express", "Material UI"],
};

const styles = StyleSheet.create({
    page: {
        fontFamily: "Roboto",
        fontSize: 12,
        padding: 30,
        backgroundColor: "#fefefe",
        color: "#333",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: "#1976d2",
        paddingBottom: 10,
    },
    photo: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 15,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1976d2",
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#1976d2",
        textTransform: "uppercase",
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        paddingBottom: 3,
    },
    text: {
        marginBottom: 4,
    },
    listItem: {
        marginBottom: 3,
    },
    skillContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 4,
    },
    skill: {
        borderWidth: 1,
        borderColor: "#1976d2",
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginRight: 6,
        marginBottom: 6,
        fontSize: 10,
        color: "#1976d2",
    },
});

export default function PdfDocument() {
    return (
        <Document>
            <Page style={styles.page}>
                {/* Header con foto y nombre */}
                <View style={styles.header}>
                    <Image src={data.photo} style={styles.photo} />
                    <Text style={styles.name}>{data.name}</Text>
                </View>

                {/* Sobre mí */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sobre mí</Text>
                    <Text style={styles.text}>{data.about}</Text>
                </View>

                {/* Experiencia */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experiencia</Text>
                    {data.experience.map((exp, i) => (
                        <View key={i} style={{ marginBottom: 8 }}>
                            <Text style={{ fontWeight: "bold" }}>
                                {exp.role} – {exp.company} ({exp.years})
                            </Text>
                            <Text>{exp.description}</Text>
                        </View>
                    ))}
                </View>

                {/* Educación */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Educación</Text>
                    {data.education.map((edu, i) => (
                        <View key={i} style={{ marginBottom: 8 }}>
                            <Text style={{ fontWeight: "bold" }}>
                                {edu.degree} – {edu.institution}
                            </Text>
                            <Text>{edu.years}</Text>
                        </View>
                    ))}
                </View>

                {/* Habilidades */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Habilidades</Text>
                    <View style={styles.skillContainer}>
                        {data.skills.map((skill, i) => (
                            <Text key={i} style={styles.skill}>
                                {skill}
                            </Text>
                        ))}
                    </View>
                </View>

                {/* Contacto */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Contacto</Text>
                    <Text>Email: {data.email}</Text>
                    <Text>LinkedIn: {data.linkedin}</Text>
                </View>
            </Page>
        </Document>
    );
}
