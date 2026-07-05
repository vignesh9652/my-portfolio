import "../css/Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaJava,
  FaDatabase,
  FaProjectDiagram
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiReact } from "react-icons/si";

function Projects() {

  const projects = [
    {
      title: "Placement Preparation Tracker",
      description:
        "A full stack platform that helps students organize placement preparation, track progress, manage tasks and access learning resources efficiently.",

      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "REST API",
        "MySQL"
      ],

      github: "https://github.com/yourgithub",
      demo: "#"
    },

    {
      title: "Movie Ticket Booking System",
      description:
        "A responsive movie booking application supporting movie browsing, seat selection, booking management and complete CRUD operations.",

      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "REST API",
        "MySQL"
      ],

      github: "https://github.com/yourgithub",
      demo: "#"
    }
  ];

  return (
    <section className="projects" id="projects">

      <div className="section-tag">
        PROJECTS
      </div>

      <h2 className="projects-title">
        Featured Projects
      </h2>

      <p className="projects-text">
        Some of my recent full stack projects built using
        Java, Spring Boot, React and MySQL.
      </p>

      <div className="project-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-icon">
              <FaProjectDiagram />
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">

              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}

            </div>

            <div className="project-buttons">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FaGithub />
                GitHub
              </a>
            </div>

          </div>

        ))}

      </div>

      <div className="tech-icons">
        <FaJava />
        <SiSpringboot />
        <SiReact />
        <SiMysql />
        <FaDatabase />
      </div>

    </section>
  );
}

export default Projects;