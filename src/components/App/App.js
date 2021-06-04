import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import styles from './App.module.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import newsApi from '../../utils/NewsApi';

function App() {
  const history = useHistory();

  const [currentUser] = useState({});
  // const [isLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);
  const [numberOfCardsShown, setNumberOfCardsShown] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');

  const [searchResultsStatus, setSearchResultsStatus] = useState('');

  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [
    isRegistrationCompletedPopupOpen,
    setIsRegistrationCompletedPopupOpen,
  ] = useState(false);

  function closeAllPopups() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsRegistrationCompletedPopupOpen(false);
  }

  function handleNavigationButtonClick() {
    setIsSignInPopupOpen(true);
  }

  function handleRedirectPopupButtonClick() {
    setIsSignInPopupOpen(!isSignInPopupOpen);
    setIsSignUpPopupOpen(!isSignUpPopupOpen);
  }

  function handleRedirectRegistrationCompletedPopupButtonClick() {
    setIsSignInPopupOpen(true);
    setIsRegistrationCompletedPopupOpen(false);
  }

  function handleSignOut() {
    history.push('/');
  }

  function handleSearchTermChange(evt) {
    setSearchTerm(evt.target.value);
  }

  function handleSearchFormSubmit(evt) {
    evt.preventDefault();

    setSearchResultsStatus('preloader');

    setNumberOfCardsShown(3);

    newsApi
      .getArticles(searchTerm)
      .then((articles) => {
        setSearchResultsStatus(
          articles.length === 0 ? 'nothingFound' : 'searchResults'
        );

        articles.forEach((article) => {
          article.keyword = searchTerm;
          article.source = article.source.name;
          article.text = article.description;
          article.link = article.url;
          article.image = article.urlToImage;
          article.date = article.publishedAt;
        });

        setCards(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleShowMoreCards() {
    setNumberOfCardsShown(numberOfCardsShown + 3);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={styles.block}>
        <Switch>
          <Route exact path="/">
            <Header
              onNavigationButtonClick={handleNavigationButtonClick}
              searchTerm={searchTerm}
              handleSearchTermChange={handleSearchTermChange}
              handleSearchFormSubmit={handleSearchFormSubmit}
            />
            <Main
              cards={cards}
              searchResultsStatus={searchResultsStatus}
              numberOfCardsShown={numberOfCardsShown}
              handleShowMoreCards={handleShowMoreCards}
            />
            <Footer />
            {isSignInPopupOpen && (
              <>
                <PopupWithForm
                  onCloseButtonClick={closeAllPopups}
                  onRedirectPopupButtonClick={handleRedirectPopupButtonClick}
                  type="signIn"
                />
                <RemoveScroll />
              </>
            )}
            {isSignUpPopupOpen && (
              <>
                <PopupWithForm
                  onCloseButtonClick={closeAllPopups}
                  onRedirectPopupButtonClick={handleRedirectPopupButtonClick}
                  type="signUp"
                />
                <RemoveScroll />
              </>
            )}
            {isRegistrationCompletedPopupOpen && (
              <>
                <PopupWithForm
                  onCloseButtonClick={closeAllPopups}
                  onRedirectPopupButtonClick={
                    handleRedirectRegistrationCompletedPopupButtonClick
                  }
                  type="registrationCompleted"
                />
                <RemoveScroll />
              </>
            )}
          </Route>

          <Route exact path="/saved-news">
            <SavedNewsHeader onNavigationButtonClick={handleSignOut} />
            <SavedNews />
            <Footer />
          </Route>

          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
