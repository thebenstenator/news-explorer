import { useContext } from "react";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews() {
  const { savedArticles } = useContext(SavedArticlesContext);
  const { currentUser } = useContext(CurrentUserContext);

  const keywords = [
    ...new Set(savedArticles.map((article) => article.keyword)),
  ];
  const displayedKeywords = keywords.slice(0, 3).join(", ");
  const remainingCount = keywords.length - 3;

  return (
    <section className="saved-news">
      <div className="saved-news__header">
        <p className="saved-news__label">Saved articles</p>
        <h3 className="saved-news__title">
          {currentUser?.name}, you have {savedArticles.length} saved articles
        </h3>
        <p className="saved-news__keywords">
          <span className="saved-news__keywords-label">By keywords: </span>
          <span className="saved-news__keywords-list">
            {displayedKeywords}
            {remainingCount > 0 && `, and ${remainingCount} other`}
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
