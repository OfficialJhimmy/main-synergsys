import "./index.css";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <div className="footer__bottom--date">
        <h3>
          &#169;{new Date().getFullYear()} SYNERGETICS GLOBAL SYSTEMS | All rights reserved{" "}
        </h3>
      </div>

      <div className="footer__icons">
        <a
          href="#"
          className="social-media__links"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare className="footer__icon" />
        </a>
        <a
          href="#"
          className="social-media__links"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="footer__icon" />
        </a>

        <a
          href="#"
          className="social-media__links"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="footer__icon" />
        </a>

        <a
          href="#"
          className="social-media__links"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter className="footer__icon" />
        </a>
        <a href="#">
          <BiLogoGmail className="footer__icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
