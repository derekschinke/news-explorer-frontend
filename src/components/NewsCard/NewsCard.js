import styles from './NewsCard.module.css';

import classnames from 'classnames';
import { parseISO, format } from 'date-fns';
import { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { isObjectEmpty } from '../../utils/helpers';

function NewsCard({ card, isMain, handlePostArticle }) {
  const currentUser = useContext(CurrentUserContext);

  const isLoggedIn = !isObjectEmpty(currentUser);

  const [isBookmarked, setIsBookmarked] = useState(false);

  // function handleButtonClick() {
  //   if (isMain) {
  //     setIsBookmarked(!isBookmarked);
  //   }
  // }

  return (
    <li className={styles.block}>
      <div
        className={styles.image}
        role="img"
        alt={card.title}
        style={{ backgroundImage: `url(${card.image})` }}
      >
        <div className={styles.bits}>
          <div
            className={classnames(styles.keyword, {
              [styles.keyword_hidden]: isMain,
            })}
          >
            {card.keyword}
          </div>
          <button
            className={classnames(styles.button, {
              clickable: !(isMain && !isLoggedIn),
              [styles.button_bookmark]: isMain,
              [styles.button_bookmark_bookmarked]: isMain && isBookmarked,
              [styles.button_delete]: !isMain,
            })}
            label={isMain ? 'Bookmark' : 'Delete'}
            disabled={isMain && !isLoggedIn}
            onClick={handlePostArticle}
          ></button>
          {!(isMain && isLoggedIn) && (
            <div
              className={classnames(styles.tooltip, {
                [styles.tooltip_route_savedNews]: !isMain,
              })}
            >
              {isMain ? 'Sign in to save articles' : 'Remove from saved'}
            </div>
          )}
        </div>
      </div>
      <div className={styles.info}>
        <time dateTime={card.date} className={styles.date}>
          {format(parseISO(card.date), 'LLLL d, yyyy')}
        </time>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.text}>{card.text}</p>
        <a
          className={styles.source}
          href={card.link}
          target="_blank"
          rel="noreferrer"
        >
          {card.source}
        </a>
      </div>
    </li>
  );
}

export default NewsCard;
