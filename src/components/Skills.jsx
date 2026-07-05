import "../css/Skills.css";

function Skills() {

  const frontend = [
    "React",
    "HTML",
    "CSS",
    "JavaScript"
  ];

  const backend = [
    "Java",
    "Spring Boot",
    "REST API"
  ];

  const database = [
    "MySQL",
    "MongoDB"
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "IntelliJ",
    "Postman"
  ];

  return (
    <section className="skills" id="skills">

      <div className="section-tag">
        TECHNICAL SKILLS
      </div>


      <div className="skill-grid">

        <div className="skill-card">
          <h3>Frontend</h3>

          <div className="skills-list">
            {frontend.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>

          <div className="skills-list">
            {backend.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h3>Database</h3>

          <div className="skills-list">
            {database.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h3>Developer Tools</h3>

          <div className="skills-list">
            {tools.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;