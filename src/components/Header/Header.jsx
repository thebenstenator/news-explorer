import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({
  handleSigninClick,
  handleMobileTap,
  activeModal,
  handleLogout,
}) {
  return (
    <header className="header">
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
