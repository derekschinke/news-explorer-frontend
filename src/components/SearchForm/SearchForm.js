import styles from './SearchForm.module.css';

import classnames from 'classnames';

function SearchForm({
  searchTerm,
  handleSearchTermChange,
  handleSearchFormSubmit,
}) {
  return (
    <section className={styles.block}>
      <h2 className={styles.header}>What’s going on in the world?</h2>
      <p className={styles.subheader}>
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className={styles.form} onSubmit={handleSearchFormSubmit}>
        <label>
          <input
            className={styles.searchField}
            type="text"
            placeholder="Enter topic"
            id="search"
            onChange={handleSearchTermChange}
            value={searchTerm}
          />
        </label>
        <label>
          <input
            className={classnames(styles.submitButton, 'clickable')}
            type="submit"
            value="Search"
          />
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
