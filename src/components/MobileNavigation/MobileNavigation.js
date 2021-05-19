import styles from './MobileNavigation.module.css';

import { Link } from 'react-router-dom';

function MobileNavigation() {
  return (
    <div className={styles.block}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </li>
        </ul>
        <button className={styles.button}>Sign in</button>
      </nav>
    </div>
  );
}

export default MobileNavigation;
