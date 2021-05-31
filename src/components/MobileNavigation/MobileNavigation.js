import styles from './MobileNavigation.module.css';

import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { isObjectEmpty } from '../../utils/helpers';

function MobileNavigation(props) {
  const currentUser = useContext(CurrentUserContext);

  const isLoggedIn = !isObjectEmpty(currentUser);

  return (
    <div className={styles.block}>
      <nav
        className={classnames(styles.nav, {
          [styles.nav_route_savedNews]: !props.isMain,
        })}
      >
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link
              className={classnames(styles.navLink, {
                [styles.navLink_route_savedNews]: !props.isMain,
              })}
              to="/"
            >
              Home
            </Link>
          </li>
          {isLoggedIn && (
            <li className={styles.navListItem}>
              <Link
                className={classnames(styles.navLink, {
                  [styles.navLink_route_savedNews]: !props.isMain,
                })}
                to="/saved-news"
              >
                Saved articles
              </Link>
            </li>
          )}
        </ul>
        <button
          className={classnames(styles.button, 'clickable', {
            [styles.button_route_savedNews]: !props.isMain,
          })}
          label={!isLoggedIn ? 'Sign in' : 'Sign out'}
          onClick={props.onMobileNavigationButtonClick}
        >
          {!isLoggedIn ? 'Sign in' : 'Elise'}
          {isLoggedIn && <props.signOutIcon className={styles.buttonImage} />}
        </button>
      </nav>
    </div>
  );
}

export default MobileNavigation;
