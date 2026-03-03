import About from "../About/About";
import Hero from "../Hero/Hero";
import NewsCardList from "../NewsCardList/NewsCardList";
import RegistrationConfirmation from "../RegistrationConfirmation/RegistrationConfirmation";
import "./Main.css";

function Main() {
  return (
    <main>
      <Hero />
      <NewsCardList />
      <About />
    </main>
  );
}

export default Main;
