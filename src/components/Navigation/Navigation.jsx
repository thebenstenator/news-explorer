import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Navigation({
  handleSigninClick,
  handleMobileTap,
  activeModal,
  handleLogout,
}) {
  const { isLoggedIn } = useContext(CurrentUserContext);

  return (
    <nav className="navigation">
      <Link className="navigation__logo" to="/">
        NewsExplorer
      </Link>

      {!activeModal && (
        <button
          className="navigation__mobile-menu"
          type="button"
          onClick={handleMobileTap}
        />
      )}

      <div className="navigation__links">
        <NavLink
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : ""}`
          }
          to="/"
        >
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink
              className={({ isActive }) =>
                `navigation__link navigation__link_type_saved ${isActive ? "navigation__link_active" : ""}`
              }
              to="/saved-news"
            >
              Saved articles
            </NavLink>
            <button
              className="navigation__sign-out-btn"
              type="button"
              onClick={handleLogout}
            >
              Elise <div className="navigation__sign-out-symbol"></div>
            </button>
          </>
        ) : (
          <button
            className="navigation__sign-in_btn"
            onClick={handleSigninClick}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
