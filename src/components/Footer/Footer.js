import styles from './Footer.module.css';

import { Link } from 'react-router-dom';

import { ReactComponent as GitHubLogo } from 'bootstrap-icons/icons/github.svg';
import { ReactComponent as LinkedInLogo } from 'bootstrap-icons/icons/linkedin.svg';

import classnames from 'classnames';

function Footer() {
  return (
    <footer className={styles.block}>
      <p className={styles.copyright}>
        © 2021 Derek Schinke, Powered by News API
      </p>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.link}
              href="https://practicum.yandex.com/"
              target="_blank"
              rel="noreferrer"
            >
              Practicum by Yandex
            </a>
          </li>
          <li
            className={classnames(styles.listItem, styles.listItem_type_icon)}
          >
            <a
              href="https://github.com/derekschinke"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogo
                className={classnames(styles.icon, styles.icon_github)}
                title="GitHub"
              />
            </a>
          </li>
          <li
            className={classnames(styles.listItem, styles.listItem_type_icon)}
          >
            <a
              href="https://www.linkedin.com/in/derekschinke"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInLogo
                className={classnames(styles.icon, styles.icon_linkedin)}
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
