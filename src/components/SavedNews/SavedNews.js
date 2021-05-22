import styles from './SavedNews.module.css';

import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews() {
  return (
    <main className={styles.block}>
      <div className={styles.items}>
        <NewsCardList />
      </div>
    </main>
  );
}

export default SavedNews;
