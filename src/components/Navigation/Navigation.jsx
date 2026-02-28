import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ handleSigninClick }) {
  return (
    <nav className="navigation">
      <Link className="navigation__logo" to="/">
        NewsExplorer
      </Link>
      <div className="navigation__links">
        <NavLink
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : ""}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `navigation__link navigation__link_type_saved ${isActive ? "navigation__link_active" : ""}`
          }
          to="/saved-news"
        >
          Saved articles
        </NavLink>
        <button className="navigation__sign-in_btn" onClick={handleSigninClick}>
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
