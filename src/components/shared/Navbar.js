import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__center">
        <div className="nav__left">
          <Link to="/" className="nav__left-link">
            𝓦𝓮𝓪𝓽𝓱𝓮𝓻 𝓐𝓹𝓹
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
