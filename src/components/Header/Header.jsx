import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Navigation />
      <button className="header__sign-inbtn">Sign in</button>
    </header>
  );
}

export default Header;
