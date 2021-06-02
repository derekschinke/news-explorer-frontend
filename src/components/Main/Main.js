import About from '../About/About';
// import NothingFound from '../NothingFound/NothingFound';
// import Preloader from '../Preloader/Preloader';
import SearchResults from '../SearchResults/SearchResults';

function Main({ cards }) {
  return (
    <main>
      {/* <Preloader /> */}
      {/* <NothingFound /> */}
      <SearchResults cards={cards} />
      <About />
    </main>
  );
}

export default Main;
