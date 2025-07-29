// src/components/SkillIcon.jsx
import React from "react";
import {
    FaReact,
    FaNodeJs,
    FaVuejs,
    FaPhp,
    FaGitAlt,
    FaAngular,
    FaHtml5,
    FaCss3Alt,
    FaLaravel,
    FaWordpress,
    FaSass,
    FaNpm,
    FaMicrosoft,
} from "react-icons/fa";
import {
    SiMongodb,
    SiMysql,
    SiExpress,
    SiNextdotjs,
    SiTypescript,
    SiVuedotjs,
    SiJavascript,
    SiOpenai,
    SiCypress,
    SiJquery,
    SiPrestashop,
    SiJsonwebtokens,
    SiJson,
    SiIonic,
    SiCpanel,
} from "react-icons/si";
import { DiGithubFull } from "react-icons/di";
import { MdStorage, MdTerminal, MdWeb } from "react-icons/md";

const icons = {
    react: <FaReact color="#61DBFB" />,
    vue: <FaVuejs color="#42b883" />,
    "vue.js": <SiVuedotjs color="#42b883" />,
    angular: <FaAngular color="#dd1b16" />,
    "node.js": <FaNodeJs color="#339933" />,
    express: <SiExpress />,
    mongodb: <SiMongodb color="#47A248" />,
    mysql: <SiMysql color="#00758F" />,
    php: <FaPhp color="#8892BF" />,
    html: <FaHtml5 color="#E34F26" />,
    html5: <FaHtml5 color="#E34F26" />,
    css: <FaCss3Alt color="#264de4" />,
    css3: <FaCss3Alt color="#264de4" />,
    javascript: <SiJavascript color="#F0DB4F" />,
    typescript: <SiTypescript color="#3178C6" />,
    git: <FaGitAlt color="#F05032" />,
    github: <DiGithubFull color="#181717" />,
    "next.js": <SiNextdotjs />,
    jquery: <SiJquery color="#0769AD" />,
    openai: <SiOpenai />,
    chatgpt: <SiOpenai />,
    cypress: <SiCypress />,
    jwt: <SiJsonwebtokens />,
    json: <SiJson />,
    npm: <FaNpm color="#CB3837" />,
    prestashop: <SiPrestashop />,
    ionic: <SiIonic />,
    wordpress: <FaWordpress color="#21759b" />,
    sass: <FaSass color="#CD6799" />,
    office: <FaMicrosoft color="#F25022" />,
    "office 365": <FaMicrosoft color="#F25022" />,
    cpanel: <SiCpanel />,
    terminal: <MdTerminal />,
    storage: <MdStorage />,
    web: <MdWeb />,
    laravel: <FaLaravel color="#FF2D20" />,
};

export default function SkillIcon({ skill }) {
    const key = skill.toLowerCase();
    return icons[key] || <MdWeb color="#999" />;
}
