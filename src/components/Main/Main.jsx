import { useContext } from "react";

import About from "../About/About";
import Hero from "../Hero/Hero";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import "./Main.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main({ articles, isSearched, handleSearch, isLoading, searchError }) {
  const { isLoggedIn } = useContext(CurrentUserContext);

  return (
    <main>
      <Hero handleSearch={handleSearch} />
      {isLoading && <Preloader />}
      {!isLoading && searchError && (
        <NoResults
          title="Something went wrong"
          message="Sorry, something went wrong during the request. Please try again later."
        />
      )}
      {!isLoading && isSearched && !searchError && articles.length === 0 && (
        <NoResults
          title="Nothing found"
          message="Sorry, but nothing matched your search terms."
        />
      )}
      {!isLoading && isSearched && articles.length > 0 && (
        <NewsCardList
          key={isLoggedIn}
          articles={articles}
          isSavedPage={false}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
