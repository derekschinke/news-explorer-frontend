import styles from './About.module.css';
import image from '../../images/jakayla-toney-LmF4eBYs08c-unsplash.webp';

function About() {
  return (
    <section className={styles.block}>
      <img className={styles.image} alt="Author" src={image}></img>
      <div className={styles.text}>
        <h2 className={styles.header}>About the author</h2>
        <p className={styles.description}>
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
          <br />
          <br />
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
