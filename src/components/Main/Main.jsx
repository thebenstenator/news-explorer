import About from "../About/About";
import Hero from "../Hero/Hero";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import "./Main.css";

function Main({
  isLoggedIn,
  articles,
  isSearched,
  handleSearch,
  isLoading,
  handleSaveArticle,
  handleDeleteArticle,
  savedArticles,
}) {
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
          handleSaveArticle={handleSaveArticle}
          handleDeleteArticle={handleDeleteArticle}
          savedArticles={savedArticles}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
