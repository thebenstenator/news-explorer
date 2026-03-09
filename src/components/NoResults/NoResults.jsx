import "./NoResults.css";

function NoResults() {
  return (
    <section className="no-results">
      <div className="no-results__image"></div>
      <h3 className="no-results__title">Nothing found</h3>
      <p className="no-results__text">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NoResults;
