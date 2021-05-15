import './SearchForm.css';

function SearchForm() {
  return (
    <section className="SearchForm">
      <h2 className="SearchForm__header">What’s going on in the world?</h2>
      <p className="SearchForm__subheader">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="SearchForm__form">
        <label>
          <input
            className="SearchForm__search-field"
            type="text"
            placeholder="Enter topic"
            id="search"
          />
        </label>
        <label>
          <input
            className="SearchForm__submit-button"
            type="submit"
            value="Search"
          />
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
