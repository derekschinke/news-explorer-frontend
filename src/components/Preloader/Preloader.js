import styles from './Preloader.module.css';

function Preloader() {
  return (
    <section className={styles.block}>
      <div className={styles.circle}></div>
      <p className={styles.description}>Searching for news…</p>
    </section>
  );
}

export default Preloader;
