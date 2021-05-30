import styles from './NothingFound.module.css';

function NothingFound() {
  return (
    <section className={styles.block}>
      <div className={styles.image}></div>
      <h2 className={styles.header}>Nothing found</h2>
      <p className={styles.description}>
        Sorry, but nothing matched
        <br />
        your search terms.
      </p>
    </section>
  );
}

export default NothingFound;
