import SearchForm from "../SearchForm/SearchForm";
import "./Hero.css";

function Hero({ handleSearch }) {
  return (
    <section className="hero">
      <h1 className="hero__title">What's going on in the world?</h1>
      <p className="hero__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm handleSearch={handleSearch} />
    </section>
  );
}

export default Hero;
