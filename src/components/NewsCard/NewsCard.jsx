import "./NewsCard.css";

function NewsCard({ article }) {
  return (
    <section className="news-card">
      <div className="news-card__content">
        <img src={article.urlToImage} alt="" className="news-card__image" />
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
    </section>
  );
}

export default NewsCard;
