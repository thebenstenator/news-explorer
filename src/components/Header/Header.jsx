import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ handleSigninClick }) {
  return (
    <header className="header">
      <Navigation handleSigninClick={handleSigninClick} />
    </header>
  );
}

export default Header;
