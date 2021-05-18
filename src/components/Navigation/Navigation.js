import styles from './Navigation.module.css';

function Navigation() {
  return (
    <div className={styles.block}>
      <div className={styles.items}>
        <h1 className={styles.logo}>NewsExplorer</h1>
        <div className={styles.actions}>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navLink}>Home</li>
            </ul>
          </nav>
          <button className={styles.button}>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
