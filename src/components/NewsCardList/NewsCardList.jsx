import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ isSavedPage, articles }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleArticles = articles.slice(0, visibleCount);

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
        {visibleArticles.map((article) => (
          <NewsCard
            key={article.url}
            article={article}
            isSavedPage={isSavedPage}
          />
        ))}
      </div>
      {!isSavedPage && visibleCount < articles.length && (
        <button
          className="news-card-list__more-btn"
          type="button"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
