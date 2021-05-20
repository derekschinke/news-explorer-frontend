import styles from './MobileNavigation.module.css';

import { Link } from 'react-router-dom';
import classnames from 'classnames';

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
        </ul>
        <button
          className={classnames(styles.button, {
            [styles.button_route_savedNews]: !props.isMain,
          })}
        >
          Sign in
        </button>
      </nav>
    </div>
  );
}

export default MobileNavigation;
