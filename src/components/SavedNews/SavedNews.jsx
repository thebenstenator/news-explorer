import { useContext } from "react";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews() {
  const { savedArticles } = useContext(SavedArticlesContext);

  return (
    <section className="saved-news">
      <div className="saved-news__header">
        <p className="saved-news__label">Saved articles</p>
        <h3 className="saved-news__title">Elise, you have 5 saved articles</h3>
        <p className="saved-news__keywords">
          <span className="saved-news__keywords-label">By keywords: </span>
          <span className="saved-news__keywords-list">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
      <div className="saved-news__articles">
        <NewsCardList isSavedPage={true} articles={savedArticles} />
      </div>
    </section>
  );
}

export default SavedNews;
