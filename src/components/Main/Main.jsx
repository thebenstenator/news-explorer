import { useState } from "react";

import About from "../About/About";
import Hero from "../Hero/Hero";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

import { mockArticles } from "../../utils/constants";

function Main({ isLoggedIn }) {
  const [isSearched, setIsSearched] = useState(false);
  const [articles, setArticles] = useState(mockArticles);

  const onSearch = (e) => {
    setIsSearched(true);
  };

  return (
    <main>
      <Hero onSearch={onSearch} />
      {isSearched && (
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
