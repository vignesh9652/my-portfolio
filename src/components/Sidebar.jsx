import "./../css/Sidebar.css";

import {
    FaHome,
    FaUser,
    FaCode,
    FaBriefcase,
    FaProjectDiagram,
    FaGraduationCap,
    FaCertificate,
    FaEnvelope,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

function Sidebar(){

    return(

        <aside className="sidebar">

            <div className="profile">

                <img
                    src="/images/profile.jpg"
                    alt="profile"
                />

                <h2>Panchavati Vignesh</h2>

                <p>Java Full Stack Developer</p>

            </div>

            <nav>

                <a href="#home">
                    <FaHome/>
                    Home
                </a>

                <a href="#about">
                    <FaUser/>
                    About
                </a>

                <a href="#skills">
                    <FaCode/>
                    Skills
                </a>

                <a href="#experience">
                    <FaBriefcase/>
                    Experience
                </a>

                <a href="#projects">
                    <FaProjectDiagram/>
                    Projects
                </a>

                <a href="#education">
                    <FaGraduationCap/>
                    Education
                </a>

                <a href="#certificates">
                    <FaCertificate/>
                    Certificates
                </a>

                <a href="#contact">
                    <FaEnvelope/>
                    Contact
                </a>

            </nav>

            <div className="social">

                <a href="https://github.com/" target="_blank" rel="noreferrer">
                    <FaGithub/>
                </a>

                <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                    <FaLinkedin/>
                </a>

            </div>

        </aside>

    );

}

export default Sidebar;