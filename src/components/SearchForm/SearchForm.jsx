import { useState } from "react";

import "./SearchForm.css";

function SearchForm({ handleSearch }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a keyword");
      return;
    }
    setError("");
    handleSearch(query);
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className={`search-form__input ${error ? "search-form__input_error" : ""}`}
        placeholder={error ? "Please enter a keyword" : "Enter topic"}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setError("");
        }}
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
