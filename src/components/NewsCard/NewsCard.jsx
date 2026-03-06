import "./NewsCard.css";

function NewsCard({ article, isLoggedIn }) {
  return (
    <div className="news-card">
      <button
        className={`news-card__save-btn ${!isLoggedIn ? "news-card__save-btn_logged-out" : ""}`}
        type="button"
      ></button>
      <img src={article.urlToImage} alt="" className="news-card__image" />
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
