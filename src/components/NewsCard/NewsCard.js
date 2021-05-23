import styles from './NewsCard.module.css';

import classnames from 'classnames';

function NewsCard(props) {
  return (
    <li className={styles.block}>
      <div
        className={styles.image}
        role="img"
        alt={props.card.title}
        style={{ backgroundImage: `url(${props.card.image})` }}
      >
        <div className={styles.bits}>
          <div
            className={classnames(styles.keyword, {
              [styles.keyword_hidden]: props.isMain,
            })}
          >
            {props.card.keyword}
          </div>
          <button
            className={classnames(styles.button, 'clickable', {
              [styles.button_bookmark]: props.isMain,
              [styles.button_delete]: !props.isMain,
            })}
            label=""
          ></button>
          <div
            className={classnames(styles.tooltip, {
              [styles.tooltip_route_savedNews]: !props.isMain,
            })}
          >
            {props.isMain ? 'Sign in to save articles' : 'Remove from saved'}
          </div>
        </div>
      </div>
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
