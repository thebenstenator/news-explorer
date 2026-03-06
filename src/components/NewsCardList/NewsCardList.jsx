import { mockArticles } from "../../utils/constants";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ isLoggedIn }) {
  return (
    <section className="news-card-list">
      <h3 className="news-card-list__title">Search Results</h3>
      <div className="news-card-list__cards">
        {mockArticles.map((article) => (
          <NewsCard
            key={article._id}
            article={article}
            isLoggedIn={isLoggedIn}
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
