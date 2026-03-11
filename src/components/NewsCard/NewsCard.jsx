import { useContext } from "react";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./NewsCard.css";

function NewsCard({ article, isSavedPage }) {
  const { savedArticles, handleDeleteArticle, handleSaveArticle } =
    useContext(SavedArticlesContext);

  const { isLoggedIn } = useContext(CurrentUserContext);

  const isSaved = savedArticles.some((saved) => saved.url === article.url);

  const handleSave = () => {
    if (!isLoggedIn) return;
    if (isSaved) {
      handleDeleteArticle(article);
    } else {
      handleSaveArticle(article);
    }
  };

  return (
    <div className="news-card">
      {isSavedPage ? (
        <>
          <button
            className="news-card__delete-btn"
            type="button"
            onClick={() => handleDeleteArticle(article)}
          />
          <div className="news-card__keyword">{article.keyword}</div>
        </>
      ) : isLoggedIn ? (
        <button
          className={`news-card__save-btn ${isSaved ? "news-card__save-btn_saved" : ""}`}
          type="button"
          onClick={handleSave}
        />
      ) : (
        <button
          className="news-card__save-btn news-card__save-btn_logged-out"
          type="button"
        />
      )}

      <img
        src={article.urlToImage}
        alt={article.title}
        className="news-card__image"
      />
      <div className="news-card__content">
        <p className="news-card__date">
          {new Date(article.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h4 className="news-card__title">{article.title}</h4>
        <p className="news-card__description">{article.description}</p>
        <p className="news-card__source">{article.source.name}</p>
      </div>
    </div>
  );
}

export default NewsCard;
