import "../css/Experience.css";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="section-tag">
        INTERNSHIPS
      </div>

      <h2 className="experience-title">
        Professional Journey
      </h2>

      <p className="experience-text">
        My internship experience helped me gain practical exposure
        to Java Full Stack Development, Spring Boot, REST APIs,
        frontend technologies, version control, and Agile practices.
      </p>

      <div className="timeline">

        {/* Experience 1 */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaBriefcase />
          </div>

          <div className="timeline-content">

            <span className="timeline-date">
              Aug 2025 - Oct 2025
            </span>

            <h3>Java Backend Intern</h3>

            <h4>EduNoVerse Tech Solutions</h4>

            <ul>
              <li>Developed backend modules using Spring Boot.</li>
              <li>Designed and consumed RESTful APIs.</li>
              <li>Worked with Git and GitHub for version control.</li>
              <li>Followed Agile development methodologies.</li>
              <li>Collaborated with teams on real-world projects.</li>
            </ul>

          </div>

        </div>

        {/* Experience 2 */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaBriefcase />
          </div>

          <div className="timeline-content">

            <span className="timeline-date">
              Jan 2023 - Feb 2023
            </span>

            <h3>Frontend Development Intern</h3>

            <h4>ThinkChamp Pvt. Ltd.</h4>

            <ul>
              <li>Developed responsive web pages.</li>
              <li>Created modern user interfaces using HTML and CSS.</li>
              <li>Improved website responsiveness.</li>
              <li>Worked on cross-browser compatibility.</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;