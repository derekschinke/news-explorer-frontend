import styles from './Header.module.css';

import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Header(props) {
  return (
    <header className={styles.block} role="img" alt="Person using smartphone">
      <div className={styles.backgroundFilter}>
        <Navigation
          isLoggedIn={props.isLoggedIn}
          isMain={true}
          onNavigationButtonClick={props.onNavigationButtonClick}
        />
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
