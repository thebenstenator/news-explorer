import "./NoResults.css";

function NoResults({ message, title }) {
  return (
    <section className="no-results">
      <div className="no-results__image"></div>
      <h3 className="no-results__title">{title}</h3>
      <p className="no-results__text">{message}</p>
    </section>
  );
}

export default NoResults;
