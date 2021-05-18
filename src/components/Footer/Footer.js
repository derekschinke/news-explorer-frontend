import './Footer.css';

import { ReactComponent as GitHubLogo } from 'bootstrap-icons/icons/github.svg';
import { ReactComponent as LinkedInLogo } from 'bootstrap-icons/icons/linkedin.svg';

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
              <GitHubLogo
                className="Footer__icon Footer__icon_github"
                title="GitHub"
              />
            </a>
          </li>
          <li className="Footer__list-item Footer__list-item_type_icon">
            <a href="https://www.linkedin.com/in/derekschinke">
              <LinkedInLogo
                className="Footer__icon Footer__icon_linkedin"
                title="LinkedIn"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
