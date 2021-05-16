import './NewsCard.css';
import corgi from '../../images/news-card/corgi.png';

function NewsCard() {
  return (
    <li className="NewsCard">
      <img className="NewsCard__image" src={corgi} alt="" />
      <div className="NewsCard__info">
        <p className="NewsCard__date">November 4, 2020</p>
        <h3 className="NewsCard__title">
          Everyone Needs a Special ‘Sit Spot’ in Nature Everyone Needs a Special
          ‘Sit Spot’ in Nature
        </h3>
        <p className="NewsCard__text">
          Ever since I read Richard Louv’s influential book, “Last Child in the
          Woods,” the idea of having a special “sit spot” has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find a spot in nature – it could be
          anywhere, from an urban backyard to a nearby forest – and to spend
          time in it, sitting quietly. In Young’s words:
        </p>
        <a
          className="NewsCard__source"
          href="https://www.treehugger.com/special-sit-spot-nature-5085811"
        >
          Treehugger
        </a>
      </div>
    </li>
  );
}

export default NewsCard;
