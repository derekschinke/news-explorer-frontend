import About from '../About/About';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';
import SearchResults from '../SearchResults/SearchResults';

function Main({
  cards,
  searchResultsStatus,
  numberOfCardsShown,
  handleShowMoreCards,
}) {
  return (
    <main>
      {
        {
          preloader: (
            <>
              <Preloader />
            </>
          ),
          nothingFound: (
            <>
              <NothingFound />
            </>
          ),
          searchResults: (
            <>
              <SearchResults
                cards={cards}
                numberOfCardsShown={numberOfCardsShown}
                handleShowMoreCards={handleShowMoreCards}
              />
            </>
          ),
        }[searchResultsStatus]
      }
      <About />
    </main>
  );
}

export default Main;
