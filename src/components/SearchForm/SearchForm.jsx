import "./SearchForm.css";

function SearchForm({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearch();
  }
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-form__input"
        placeholder="Enter topic"
      />
      <button
        className="search-form__button"
        type="submit"
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
