import './NewsCard.css';

function NewsCard(props) {
  console.log(props.card.image);
  return (
    <li className="NewsCard">
      <div
        className="NewsCard__image"
        role="img"
        alt={props.card.title}
        style={{ backgroundImage: `url(${props.card.image})` }}
      />
      <div className="NewsCard__info">
        <p className="NewsCard__date">{props.card.date}</p>
        <h3 className="NewsCard__title">{props.card.title}</h3>
        <p className="NewsCard__text">{props.card.text}</p>
        <a className="NewsCard__source" href={props.card.link}>
          {props.card.source}
        </a>
      </div>
    </li>
  );
}

export default NewsCard;
