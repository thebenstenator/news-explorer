import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({
  handleSigninClick,
  handleMobileTap,
  activeModal,
  handleLogout,
}) {
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-news";

  return (
    <header className={`header ${isSavedPage ? "header_saved" : ""}`}>
      <div className="header__content">
        <Navigation
          handleSigninClick={handleSigninClick}
          handleMobileTap={handleMobileTap}
          activeModal={activeModal}
          handleLogout={handleLogout}
        />
      </div>
    </header>
  );
}

export default Header;
