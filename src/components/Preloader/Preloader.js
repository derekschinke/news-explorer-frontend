import styles from './Preloader.module.css';

function Preloader() {
  return (
    <section class={styles.block}>
      <div class={styles.circle}></div>
      <p className={styles.description}>Searching for news…</p>
    </section>
  );
}

export default Preloader;
