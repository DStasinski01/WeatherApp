import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__center">
        <div className="footer__left">
          <ul className="footer__links">
            <li className="footer__link">
              <Link to="/about"> About US </Link>{" "}
            </li>
            <li className="footer__link">
              <Link to="/data"> Data </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="footer__rigth">
          <ul className="footer__social-links">
            <li className="footer__social-link">
              <a href="https://www.facebook.com/" target="blank">
                <FaFacebook />
              </a>
            </li>
            <li className="footer__social-link">
              <a href="https://www.instagram.com/" target="blank">
                <FaInstagram />
              </a>
            </li>
            <li className="footer__social-link">
              <a href="https://www.youtube.com/" target="blank">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
