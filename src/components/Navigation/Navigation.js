import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
      <div className="Navigation__items">
        <h1 className="Navigation__logo">NewsExplorer</h1>
        <div className="Navigation__actions">
          <nav>
            <ul className="Navigation__nav-list">
              <li className="Navigation__nav-link">Home</li>
            </ul>
          </nav>
          <button className="Navigation__button">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
