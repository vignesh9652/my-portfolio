import "../css/Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCircle
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <span className="section-tag">REACH OUT</span>
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="contact-container">

        {/* Left Card */}

        <div className="contact-card">

          <div className="status-badge">
            <FaCircle className="status-dot" />
            Open to Opportunities
          </div>

          <h3 className="card-title">Contact Information</h3>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>panchavativignesh@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+91 9652270638</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Andhra Pradesh, India</span>
          </div>

        </div>

        {/* Right Card */}

        <div className="contact-card">

          <h3 className="card-title">Connect With Me</h3>

          <p className="connect-text">
            Open to internship and full-time opportunities as a
            Java Full Stack Developer.
            Feel free to connect and collaborate on exciting projects.
          </p>

          <div className="social-links">

            <a
              href="https://www.linkedin.com/in/vignesh-panchavati-43a8a02a7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/vignesh9652"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a href="mailto:panchavativignesh@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;