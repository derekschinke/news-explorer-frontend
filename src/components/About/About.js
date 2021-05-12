import './About.css';
import image from '../../images/jakayla-toney-LmF4eBYs08c-unsplash.webp';

function About() {
  return (
    <section className="About">
      <div className="About__items">
        <img className="About__image" alt="" src={image}></img>{' '}
        {/* <h2 className="About__header">About the author</h2> */}
        {/* <p className="About__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p> */}
        {/* <div className="About__text">
          <h2 className="About__header">About the author</h2>
          <p className="About__description">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
            <br />
            <br />
            You can also talk about your experience with Practicum, what you
            learned there, and how you can help potential customers.
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default About;
