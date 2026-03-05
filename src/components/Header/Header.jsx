import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ handleSigninClick, handleMobileTap }) {
  return (
    <header className="header">
      <div className="header__content">
        <Navigation
          handleSigninClick={handleSigninClick}
          handleMobileTap={handleMobileTap}
        />
      </div>
    </header>
  );
}

export default Header;
