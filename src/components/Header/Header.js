import './Header.css';

import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="Header">
      <div className="Header__items">
        <h1 className="Header__logo">NewsExplorer</h1>
        <div className="Header__actions">
          <Navigation />
          <button className="Header__button">Sign in</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
