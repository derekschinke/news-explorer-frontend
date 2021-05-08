import './Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="Header__items">
        <h1 className="Header__logo">NewsExplorer</h1>
        <div className="Header__actions">
          <nav>
            <ul className="Header__nav-list">
              <li className="Header__nav-link">Home</li>
            </ul>
          </nav>
          <button className="Header__button">Sign in</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
