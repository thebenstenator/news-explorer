import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ handleSigninClick }) {
  return (
    <header className="header">
      <div className="header__content">
        <Navigation handleSigninClick={handleSigninClick} />
      </div>
    </header>
  );
}

export default Header;
