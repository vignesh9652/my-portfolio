import "../css/Footer.css";
import { FaHeart } from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <h3>Panchavati Vignesh</h3>

      <p>

        Java Full Stack Developer

      </p>

      <p className="copyright">

        © 2026 All Rights Reserved.

      </p>

      <p>

        Made with <FaHeart className="heart"/> using React

      </p>

    </footer>

  );

}

export default Footer;