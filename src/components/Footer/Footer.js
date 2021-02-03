import PagesLinks from "./PagesLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__center">
        <div className="footer__left">
          <PagesLinks />
        </div>
        <div className="footer__rigth">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
