import { useContext } from "react";

import About from "../About/About";
import Hero from "../Hero/Hero";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import "./Main.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main({ articles, isSearched, handleSearch, isLoading }) {
  const { isLoggedIn } = useContext(CurrentUserContext);

  return (
    <main>
      <Hero handleSearch={handleSearch} />
      {isLoading && <Preloader />}
      {!isLoading && isSearched && articles.length === 0 && <NoResults />}
      {!isLoading && isSearched && articles.length > 0 && (
        <NewsCardList
          key={isLoggedIn}
          articles={articles}
          isLoggedIn={isLoggedIn}
          isSavedPage={false}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
