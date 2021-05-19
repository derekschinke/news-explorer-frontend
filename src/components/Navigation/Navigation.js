import styles from './Navigation.module.css';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className={styles.block}>
      <div className={styles.items}>
        <h1 className={styles.logo}>NewsExplorer</h1>
        <div className={styles.actions}>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>
                <Link className={styles.navLink} to="/">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
          <button className={styles.button}>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
