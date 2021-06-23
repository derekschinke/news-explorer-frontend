import NewsCardList from '../NewsCardList/NewsCardList';
import styles from './SearchResults.module.css';

import classnames from 'classnames';

function SearchResults({
  cards,
  numberOfCardsShown,
  handleShowMoreCards,
  handlePostArticle,
  handleDeleteArticle,
  handleSignUpButtonClick,
}) {
  return (
    <section className={styles.block}>
      <div className={styles.items}>
        <h2 className={styles.header}>Search results</h2>
        <NewsCardList
          isMain={true}
          cards={cards}
          numberOfCardsShown={numberOfCardsShown}
          handlePostArticle={handlePostArticle}
          handleDeleteArticle={handleDeleteArticle}
          handleSignUpButtonClick={handleSignUpButtonClick}
        />
        <button
          className={classnames(styles.button, 'clickable', {
            [styles.buttonHidden]: numberOfCardsShown >= cards.length,
          })}
          label="Show more"
          onClick={handleShowMoreCards}
        >
          Show more
        </button>
      </div>
    </section>
  );
}

export default SearchResults;
