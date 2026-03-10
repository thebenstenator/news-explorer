import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ isLoggedIn, isSavedPage, articles }) {
  return (
    <section className="news-card-list">
      <h3 className="news-card-list__title">Search Results</h3>
      <div className="news-card-list__cards">
        {articles.map((article) => (
          <NewsCard
            key={article.url}
            article={article}
            isLoggedIn={isLoggedIn}
            isSavedPage={isSavedPage}
          />
        ))}
      </div>
      <button className="news-card-list__more-btn" type="button">
        Show more
      </button>
    </section>
  );
}

export default NewsCardList;
