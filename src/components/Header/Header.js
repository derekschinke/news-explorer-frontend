import styles from './Header.module.css';

import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Header({
  onNavigationButtonClick,
  searchTerm,
  handleSearchTermChange,
  handleSearchFormSubmit,
}) {
  return (
    <header className={styles.block} role="img" alt="Person using smartphone">
      <div className={styles.backgroundFilter}>
        <Navigation
          isMain={true}
          onNavigationButtonClick={onNavigationButtonClick}
        />
        <SearchForm
          searchTerm={searchTerm}
          handleSearchTermChange={handleSearchTermChange}
          handleSearchFormSubmit={handleSearchFormSubmit}
        />
      </div>
    </header>
  );
}

export default Header;
