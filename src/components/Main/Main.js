import About from '../About/About';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';
import SearchResults from '../SearchResults/SearchResults';

function Main({ cards, searchResultsStatus }) {
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
              <SearchResults cards={cards} />
            </>
          ),
        }[searchResultsStatus]
      }
      <About />
    </main>
  );
}

export default Main;
