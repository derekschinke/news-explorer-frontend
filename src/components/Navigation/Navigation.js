import styles from './Navigation.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cross as Hamburger } from 'hamburger-react';
import classnames from 'classnames';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function Navigation() {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  return (
    <>
      <div
        className={classnames(styles.block, {
          [styles.block_mobileNavigation]: isMobileNavigationOpen,
        })}
      >
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
          <Hamburger
            size={24}
            color="#fff"
            label="Open menu"
            toggled={isMobileNavigationOpen}
            toggle={setIsMobileNavigationOpen}
          />
        </div>
      </div>
      {isMobileNavigationOpen && <MobileNavigation />}
    </>
  );
}

export default Navigation;
