import "../css/Education.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section className="education" id="education">

      <div className="section-tag">
        EDUCATION
      </div>

      <h2 className="education-title">
        Academic Journey
      </h2>

      <p className="education-text">
        My educational background provided a strong foundation in
        computer science, software engineering principles, and
        modern application development.
      </p>

      <div className="education-card">

        <div className="education-icon">
          <FaGraduationCap />
        </div>

        <div className="education-content">

          <span className="education-year">
            2022 - 2026
          </span>

          <h3>
            Bachelor of Technology (B.Tech)
          </h3>

          <h4>
            Computer Science and Engineering(AI&ML)
          </h4>

          <p>
            Siddharth Institute of Engineering and Technology
          </p>

        
           
          </div>

        </div>

      

    </section>
  );
}

export default Education;