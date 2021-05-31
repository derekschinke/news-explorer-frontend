import styles from './SavedNewsHeader.module.css';

import Navigation from '../Navigation/Navigation';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

function SavedNewsHeader(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header>
      <Navigation onNavigationButtonClick={props.onNavigationButtonClick} />
      <section className={styles.block}>
        <div className={styles.items}>
          <h2 className={styles.header}>Saved articles</h2>
          <h3 className={styles.subheader}>
            {`${currentUser.name}, you have 5 saved articles`}
          </h3>
          <p className={styles.info}>
            By keywords: <b>Nature, Yellowstone, and 2 other</b>
          </p>
        </div>
      </section>
    </header>
  );
}

export default SavedNewsHeader;
