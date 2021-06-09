import styles from './NewsCardList.module.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  cards,
  isMain,
  numberOfCardsShown,
  handlePostArticle,
  handleDeleteArticle,
}) {
  return (
    <ul className={styles.block}>
      {cards.slice(0, numberOfCardsShown).map((card, index) => (
        <NewsCard
          card={card}
          key={index}
          isMain={isMain}
          handlePostArticle={() => {
            handlePostArticle(card);
          }}
          handleDeleteArticle={() => {
            handleDeleteArticle(card);
          }}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
