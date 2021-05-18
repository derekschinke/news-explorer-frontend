import './Footer.css';

import { ReactComponent as GitHubLogo } from '../../images/logos/github.svg';
import { ReactComponent as LinkedInLogo } from '../../images/logos/linkedin.svg';

function Footer() {
  return (
    <footer className="Footer">
      <p className="Footer__copyright">
        © 2021 Derek Schinke, Powered by News API
      </p>
      <nav>
        <ul className="Footer__list">
          <li className="Footer__list-item">Home</li>
          <li className="Footer__list-item">
            <a className="Footer__link" href="https://practicum.yandex.com/">
              Practicum by Yandex
            </a>
          </li>
          <li className="Footer__list-item Footer__list-item_type_icon">
            <a href="https://github.com/derekschinke">
              <GitHubLogo className="Footer__icon" title="GitHub" />
            </a>
          </li>
          <li className="Footer__list-item Footer__list-item_type_icon">
            <a href="https://www.linkedin.com/in/derekschinke">
              <LinkedInLogo className="Footer__icon" title="LinkedIn" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
