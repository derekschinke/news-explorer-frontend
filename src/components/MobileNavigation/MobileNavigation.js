import styles from './MobileNavigation.module.css';

import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { ReactComponent as SignOutIcon } from '../../images/buttons/signout.svg';

function MobileNavigation(props) {
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
          {!props.isMain && (
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
        >
          {props.isMain ? 'Sign in' : 'Elise'}
          {!props.isMain && <SignOutIcon className={styles.buttonImage} />}
        </button>
      </nav>
    </div>
  );
}

export default MobileNavigation;
