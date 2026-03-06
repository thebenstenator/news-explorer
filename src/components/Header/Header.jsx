import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ handleSigninClick, handleMobileTap, activeModal }) {
  return (
    <header className="header">
      <div className="header__content">
        <Navigation
          handleSigninClick={handleSigninClick}
          handleMobileTap={handleMobileTap}
          activeModal={activeModal}
        />
      </div>
    </header>
  );
}

export default Header;
