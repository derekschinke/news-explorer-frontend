import styles from './NewsCardList.module.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  return (
    <ul className={styles.block}>
      {props.cards.map((card, index) => (
        <NewsCard card={card} key={index} isMain={props.isMain} />
      ))}
    </ul>
  );
}

export default NewsCardList;
