import './Header.css';

import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Header() {
  return (
    <header className="Header">
      <div className="Header__background-filter">
        <Navigation />
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
