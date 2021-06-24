import styles from './SavedNews.module.css';

import NewsCardList from '../NewsCardList/NewsCardList';
import { sortCardsByKeywordTotals } from '../../utils/helpers';

function SavedNews({ cards, handleDeleteArticle }) {
  return (
    <main className={styles.block}>
      <div className={styles.items}>
        <NewsCardList
          cards={sortCardsByKeywordTotals(cards)}
          handleDeleteArticle={handleDeleteArticle}
        />
      </div>
    </main>
  );
}

export default SavedNews;
