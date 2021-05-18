import styles from './NewsCard.module.css';

function NewsCard(props) {
  console.log(props.card.image);
  return (
    <li className={styles.block}>
      <div
        className={styles.image}
        role="img"
        alt={props.card.title}
        style={{ backgroundImage: `url(${props.card.image})` }}
      />
      <div className={styles.info}>
        <p className={styles.date}>{props.card.date}</p>
        <h3 className={styles.title}>{props.card.title}</h3>
        <p className={styles.text}>{props.card.text}</p>
        <a className={styles.source} href={props.card.link}>
          {props.card.source}
        </a>
      </div>
    </li>
  );
}

export default NewsCard;
