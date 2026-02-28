import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ handleSigninClick }) {
  return (
    <nav className="navigation">
      <Link className="navigation__logo" to="/">
        NewsExplorer
      </Link>
      <div className="navigation__links">
        <Link className="navigation__link" to="/">
          Home
        </Link>
        <Link
          className="navigation__link navigation__link_type_saved"
          to="/saved-news"
        >
          Saved articles
        </Link>
        <button className="navigation__sign-in_btn" onClick={handleSigninClick}>
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
