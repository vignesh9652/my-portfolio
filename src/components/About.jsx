import "../css/About.css";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaProjectDiagram
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="section-tag">
        ABOUT ME
      </div>

      <h2 className="about-title">
        Building Modern Full Stack Applications
      </h2>

      <p className="about-text">
        I'm a passionate <span>Java Full Stack Developer</span> with
        experience in Java, Spring Boot, React, REST APIs,
        MySQL and MongoDB.

        I enjoy designing scalable backend systems and
        creating responsive user interfaces that provide
        excellent user experiences.

        My goal is to develop impactful software solutions
        while continuously improving my technical and
        problem-solving skills.
      </p>

      <div className="about-cards">

        <div className="about-card">
          <FaCode className="icon" />
          <h3>Backend Development</h3>
          <p>
            Building secure and scalable backend applications
            using Java, Spring Boot and REST APIs.
          </p>
        </div>

        <div className="about-card">
          <FaLaptopCode className="icon" />
          <h3>Frontend Development</h3>
          <p>
            Creating responsive and modern user interfaces
            using React, JavaScript, HTML and CSS.
          </p>
        </div>

        <div className="about-card">
          <FaDatabase className="icon" />
          <h3>Database Management</h3>
          <p>
            Experience designing and managing databases
            using MySQL and MongoDB.
          </p>
        </div>

        <div className="about-card">
          <FaProjectDiagram className="icon" />
          <h3>Full Stack Projects</h3>
          <p>
            Developed real-world applications integrating
            frontend, backend and database systems.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;