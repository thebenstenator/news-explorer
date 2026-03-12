import { checkResponse } from "./apiHelpers";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2"
    : "https://newsapi.org/v2";

export function searchNews(query) {
  const today = new Date();
  const weekAgo = new Date();
  weekAgo.setDate(today.getDate() - 7);

  const to = today.toISOString().split("T")[0];
  const from = weekAgo.toISOString().split("T")[0];

  return fetch(
    `${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=100`,
  )
    .then(checkResponse)
    .then((data) => data.articles);
}

export function getItems() {
  return new Promise((resolve) => resolve([]));
}

export function saveArticle(article) {
  return new Promise((resolve) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0",
      url: article.url,
      title: article.title,
      urlToImage: article.urlToImage,
      description: article.description,
      publishedAt: article.publishedAt,
      source: article.source,
      keyword: article.keyword,
    });
  });
}

export function deleteArticle(articleId) {
  return new Promise((resolve) => resolve({ message: "Article deleted" }));
}
