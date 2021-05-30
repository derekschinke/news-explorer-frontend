import NewsCardList from '../NewsCardList/NewsCardList';
import styles from './SearchResults.module.css';

import classnames from 'classnames';

import { cards } from '../../utils/constants';

function SearchResults() {
  return (
    <section className={styles.block}>
      <div className={styles.items}>
        <h2 className={styles.header}>Search results</h2>
        <NewsCardList isMain={true} cards={cards} />
        <button
          className={classnames(styles.button, 'clickable')}
          label="Show more"
        >
          Show more
        </button>
      </div>
    </section>
  );
}

export default SearchResults;
