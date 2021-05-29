import styles from './Navigation.module.css';

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cross as Hamburger } from 'hamburger-react';
import classnames from 'classnames';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import { RemoveScroll } from 'react-remove-scroll';

import { ReactComponent as MainSignOutIcon } from '../../images/buttons/signout/main.svg';
import { ReactComponent as SavedNewsSignOutIcon } from '../../images/buttons/signout/savedNews.svg';
import IsLoggedInContext from '../../contexts/IsLoggedInContext';

function Navigation(props) {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  const isLoggedIn = useContext(IsLoggedInContext);

  const SignOutIcon = props.isMain ? MainSignOutIcon : SavedNewsSignOutIcon;

  function handleMobileNavigationButtonClick() {
    setIsMobileNavigationOpen(false);
    props.onNavigationButtonClick();
  }

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
                {isLoggedIn && (
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
                [styles.button_loggedIn]: isLoggedIn,
                [styles.button_route_savedNews]: !props.isMain,
              })}
              label={!isLoggedIn ? 'Sign in' : 'Sign out'}
              onClick={props.onNavigationButtonClick}
            >
              {!isLoggedIn ? 'Sign in' : 'Elise'}
              {isLoggedIn && <SignOutIcon className={styles.buttonIcon} />}
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
          <MobileNavigation
            isMain={props.isMain}
            onMobileNavigationButtonClick={handleMobileNavigationButtonClick}
            signOutIcon={SignOutIcon}
          />
          <RemoveScroll />
        </>
      )}
    </>
  );
}

export default Navigation;
