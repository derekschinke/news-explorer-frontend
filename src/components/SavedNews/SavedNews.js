import styles from './SavedNews.module.css';

import NewsCardList from '../NewsCardList/NewsCardList';

import { cards } from '../../utils/constants';

function SavedNews() {
  return (
    <main className={styles.block}>
      <div className={styles.items}>
        <NewsCardList cards={cards} />
      </div>
    </main>
  );
}

export default SavedNews;
