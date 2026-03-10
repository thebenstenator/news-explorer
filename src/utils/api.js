import { checkResponse } from "./apiHelpers";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
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
