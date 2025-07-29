// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Practices from "./sections/Practices";

export default function App() {
    return (
        <>
            <Navbar />
            <Layout>
                <Routes>
                    <Route path="/" element={<AboutMe />} />{" "}
                    {/* Portada aquí */}
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/practices" element={<Practices />} />
                </Routes>
            </Layout>
        </>
    );
}
