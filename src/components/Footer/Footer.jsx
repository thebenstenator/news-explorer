import { Link } from "react-router-dom";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <div className="footer__nav">
        <div className="footer__links">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a
            href="https://tripleten.com"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__icons">
          <a
            href="https://github.com/thebenstenator"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github" className="footer__github" />
          </a>
          <a
            href="https://linkedin.com/in/benanderson5809"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" className="footer__linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
