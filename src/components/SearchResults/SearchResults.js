import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResults.css';

function SearchResults() {
  return (
    <section className="SearchResults">
      <div className="SearchResults__items">
        <h2 className="SearchResults__header">Search results</h2>
        <NewsCardList />
      </div>
    </section>
  );
}

export default SearchResults;
