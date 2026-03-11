import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ isSavedPage, articles }) {
  return (
    <section
      className={`news-card-list ${isSavedPage ? "news-card-list_saved" : ""}`}
    >
      {!isSavedPage && (
        <h3 className="news-card-list__title">Search Results</h3>
      )}
      <div
        className={`news-card-list__cards ${isSavedPage ? "news-card-list__cards_saved" : ""}`}
      >
        {articles.map((article) => (
          <NewsCard
            key={article.url}
            article={article}
            isSavedPage={isSavedPage}
          />
        ))}
      </div>
      {!isSavedPage && (
        <button className="news-card-list__more-btn" type="button">
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
