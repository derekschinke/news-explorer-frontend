import styles from './SavedNewsHeader.module.css';

import Navigation from '../Navigation/Navigation';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import { buildKeywordString } from '../../utils/helpers';

function SavedNewsHeader({ onNavigationButtonClick, cards }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header>
      <Navigation onNavigationButtonClick={onNavigationButtonClick} />
      <section className={styles.block}>
        <div className={styles.items}>
          <h2 className={styles.header}>Saved articles</h2>
          <h3 className={styles.subheader}>
            {`${currentUser.name}, you have ${cards.length} saved article${
              cards.length === 1 ? '' : 's'
            }`}
          </h3>
          <p className={styles.info}>
            {cards.length > 0 && 'By keywords: '}
            {cards.length > 0 && (
              <span className={styles.keywords}>{`${buildKeywordString(
                cards
              )}`}</span>
            )}
          </p>
        </div>
      </section>
    </header>
  );
}

export default SavedNewsHeader;
