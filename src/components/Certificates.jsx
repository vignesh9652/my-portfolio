import "../css/Certificates.css";
import { FaCertificate } from "react-icons/fa";

function Certificates() {

  const certificates = [
    {
      title: "Java Programming",
      provider: "Udemy"
    },
    {
      title: "SQL (Basic)",
      provider: "HackerRank"
    },
    {
      title: "Front-End Development",
      provider: "ThinkChamp Pvt. Ltd."
    }
  ];

  return (
    <section className="certificates" id="certificates">

      <div className="section-tag">
        CERTIFICATIONS
      </div>

      <h2 className="certificates-title">
        Professional Certifications
      </h2>

      <p className="certificates-text">
        Professional certifications that strengthened my technical knowledge.
      </p>

      <div className="certificate-grid">

        {certificates.map((certificate, index) => (

          <div
            className="certificate-card"
            key={index}
          >

            <div className="certificate-icon">
              <FaCertificate />
            </div>

            <h3>{certificate.title}</h3>

            <p>{certificate.provider}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;