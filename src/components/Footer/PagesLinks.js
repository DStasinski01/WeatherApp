import { Link } from "react-router-dom";

const PagesLinks = () => {
  return (
    <ul className="footer__links">
      <li className="footer__link">
        <Link to="/about"> About US </Link>
      </li>
      <li className="footer__link">
        <Link to="/data"> Data </Link>
      </li>
    </ul>
  );
};

export default PagesLinks;
