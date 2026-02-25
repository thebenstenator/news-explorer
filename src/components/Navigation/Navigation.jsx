import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__logo" to="/">
        NewsExplorer
      </Link>
      <Link className="navigation__link" to="/">
        Home
      </Link>
      <Link
        className="navigation__link navigation__link_type_saved"
        to="/saved-news"
      >
        Saved articles
      </Link>
    </nav>
  );
}

export default Navigation;
