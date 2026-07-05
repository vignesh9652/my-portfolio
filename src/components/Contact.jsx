import "../css/Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-tag">
        CONTACT
      </div>

      <h2 className="contact-heading">
        Let's Work Together
      </h2>

      <p className="contact-subtitle">
        Have a project or opportunity? Let's connect.
      </p>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <div className="info-card">

            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div className="info-content">
              <h3>Email</h3>
              <p>panchavativignesh@gmail.com</p>
            </div>

          </div>

          <div className="info-card">

            <div className="info-icon">
              <FaPhone />
            </div>

            <div className="info-content">
              <h3>Phone</h3>
              <p>+91 9652270638</p>
            </div>

          </div>

          <div className="info-card">

            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div className="info-content">
              <h3>Location</h3>
              <p>Andhra Pradesh, India</p>
            </div>

          </div>

          <div className="social-links">

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

        {/* Contact Form */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;