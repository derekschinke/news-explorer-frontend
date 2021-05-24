import styles from './Navigation.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cross as Hamburger } from 'hamburger-react';
import classnames from 'classnames';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import { RemoveScroll } from 'react-remove-scroll';

import { ReactComponent as SignOutIcon } from '../../images/buttons/signout.svg';

function Navigation(props) {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  return (
    <>
      <div
        className={classnames(styles.block, {
          [styles.block_mobileNavigation]: isMobileNavigationOpen,
          [styles.block_mobileNavigation_route_savedNews]:
            isMobileNavigationOpen && !props.isMain,
          [styles.block_route_savedNews]: !props.isMain,
        })}
      >
        <div className={styles.items}>
          <h1 className={styles.logo}>
            <Link
              to="/"
              className={classnames(styles.logoLink, {
                [styles.logoLink_route_savedNews]: !props.isMain,
              })}
            >
              NewsExplorer
            </Link>
          </h1>
          <div className={styles.actions}>
            <nav>
              <ul className={styles.navList}>
                <li
                  className={classnames(styles.navListItem, {
                    [styles.navListItem_active]: props.isMain,
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
                {!props.isMain && (
                  <li
                    className={classnames(styles.navListItem, {
                      [styles.navListItem_active]: !props.isMain,
                      [styles.navListItem_route_savedNews]: !props.isMain,
                    })}
                  >
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
            </nav>
            <button
              className={classnames(styles.button, 'clickable', {
                [styles.button_route_savedNews]: !props.isMain,
              })}
              label={props.isMain ? 'Sign in' : 'Sign out'}
            >
              {props.isMain ? 'Sign in' : 'Elise'}{' '}
              {!props.isMain && <SignOutIcon className={styles.buttonImage} />}
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
      {isMobileNavigationOpen && (
        <>
          <MobileNavigation isMain={props.isMain} />
          <RemoveScroll />
        </>
      )}
    </>
  );
}

export default Navigation;
