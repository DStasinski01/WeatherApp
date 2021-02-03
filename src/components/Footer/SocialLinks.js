import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;
