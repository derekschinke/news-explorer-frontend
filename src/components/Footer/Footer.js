import './Footer.css';

import gitHubLogo from '../../images/logos/github.svg';
import linkedInLogo from '../../images/logos/linkedin.svg';

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
              <img className="Footer__icon" src={gitHubLogo} alt=""></img>
            </a>
          </li>
          <li className="Footer__list-item Footer__list-item_type_icon">
            <a href="https://www.linkedin.com/in/derekschinke">
              <img className="Footer__icon" src={linkedInLogo} alt=""></img>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
