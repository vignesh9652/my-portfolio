import "../css/Hero.css";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCircle
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">

        <div className="status-badge">
          <FaCircle className="status-dot" />
          Available for Opportunities
        </div>

        <p className="welcome"> Hello, I'm</p>

        <h1 className="hero-title">
          <span className="first-name">Panchavati</span>
          <span className="last-name"> Vignesh</span>
        </h1>

        <h2 className="hero-role">
          Java Full Stack Developer
        </h2>

        <p className="description">
          Passionate Java Full Stack Developer specializing in
          Java, Spring Boot, React, REST APIs, MySQL, and MongoDB.
          I build scalable applications with clean architecture,
          secure backend systems, and modern responsive user experiences.
        </p>

        <div className="hero-buttons">

          <a href="/images/resume.pdf" className="btn primary-btn" download>
            <FaDownload />
            Resume
          </a>

          <a href="#projects" className="btn secondary-btn">
            Projects
            <FaArrowRight />
          </a>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/vignesh9652"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vignesh-panchavati-43a8a02a7"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="hero-right">
        <div className="profile-card">
          <div className="image-bg"></div>

          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;