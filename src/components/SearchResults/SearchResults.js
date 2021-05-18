import NewsCardList from '../NewsCardList/NewsCardList';
import styles from './SearchResults.module.css';

function SearchResults() {
  return (
    <section className={styles.block}>
      <div className={styles.items}>
        <h2 className={styles.header}>Search results</h2>
        <NewsCardList />
      </div>
    </section>
  );
}

export default SearchResults;
