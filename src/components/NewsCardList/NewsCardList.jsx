import NewsCard from "../NewsCard/NewsCard";
import { mockArticles } from "../../utils/constants";

function NewsCardList() {
  return (
    <div className="news-card-list">
      {mockArticles.map((article) => (
        <NewsCard key={article._id} article={article} />
      ))}
    </div>
  );
}

export default NewsCardList;
