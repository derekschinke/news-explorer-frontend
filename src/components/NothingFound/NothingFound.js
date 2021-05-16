import './NothingFound.css';

function NothingFound() {
  return (
    <section className="NothingFound">
      <div className="NothingFound__image"></div>
      <h2 className="NothingFound__header">Nothing found</h2>
      <p className="NothingFound__description">
        Sorry, but nothing matched
        <br />
        your search terms.
      </p>
    </section>
  );
}

export default NothingFound;
