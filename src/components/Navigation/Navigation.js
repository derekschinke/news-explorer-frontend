import styles from './Navigation.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cross as Hamburger } from 'hamburger-react';
import classnames from 'classnames';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function Navigation(props) {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  return (
    <>
      <div
        className={classnames(styles.block, {
          [styles.block_mobileNavigation]: isMobileNavigationOpen,
          [styles.block_mobileNavigation_route_savedNews]:
            isMobileNavigationOpen & !props.isMain,
          [styles.block_route_savedNews]: !props.isMain,
        })}
      >
        <div className={styles.items}>
          <h1
            className={classnames(styles.logo, {
              [styles.logo_route_savedNews]: !props.isMain,
            })}
          >
            NewsExplorer
          </h1>
          <div className={styles.actions}>
            <nav>
              <ul className={styles.navList}>
                <li
                  className={classnames(styles.navListItem, {
                    [styles.navListItem_route_savedNews]: !props.isMain,
                  })}
                >
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
            </nav>
            <button
              className={classnames(styles.button, {
                [styles.button_route_savedNews]: !props.isMain,
              })}
            >
              Sign in
            </button>
          </div>
          <Hamburger
            size={24}
            color={props.isMain ? '#fff' : '#1a1b22'}
            label="Open menu"
            toggled={isMobileNavigationOpen}
            toggle={setIsMobileNavigationOpen}
          />
        </div>
      </div>
      {isMobileNavigationOpen && <MobileNavigation isMain={props.isMain} />}
    </>
  );
}

export default Navigation;
