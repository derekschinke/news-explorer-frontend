import NewsCardList from '../NewsCardList/NewsCardList';
import styles from './SearchResults.module.css';

import classnames from 'classnames';

function SearchResults() {
  return (
    <section className={styles.block}>
      <div className={styles.items}>
        <h2 className={styles.header}>Search results</h2>
        <NewsCardList />
        <button className={classnames(styles.button, 'clickable')}>
          Show more
        </button>
      </div>
    </section>
  );
}

export default SearchResults;
