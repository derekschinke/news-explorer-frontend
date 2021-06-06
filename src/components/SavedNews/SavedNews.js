import styles from './SavedNews.module.css';

import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({ cards }) {
  return (
    <main className={styles.block}>
      <div className={styles.items}>
        <NewsCardList cards={cards} />
      </div>
    </main>
  );
}

export default SavedNews;
