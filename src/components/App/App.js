import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import styles from './App.module.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useEffect, useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import newsApi from '../../utils/NewsApi';
import mainApi from '../../utils/MainApi';
import { isObjectEmpty, isSearchedArticleSaved } from '../../utils/helpers';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CARD_NUMBER_INCREMENT } from '../../utils/constants';

function App() {
  const history = useHistory();

  const [token, setToken] = useState(localStorage.getItem('token'));

  const [currentUser, setCurrentUser] = useState({});

  const [searchedCards, setSearchedCards] = useState([]);
  const [numberOfCardsShown, setNumberOfCardsShown] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');

  const [savedCards, setSavedCards] = useState([]);

  const [searchResultsStatus, setSearchResultsStatus] = useState('');

  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [
    isRegistrationCompletedPopupOpen,
    setIsRegistrationCompletedPopupOpen,
  ] = useState(false);

  const [isSubmitErrorVisible, setIsSubmitErrorVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('searchTerm')) {
      setSearchTerm(localStorage.getItem('searchTerm'));
    }
    if (localStorage.getItem('searchedCards')) {
      setSearchedCards(JSON.parse(localStorage.getItem('searchedCards')));
      setSearchResultsStatus('searchResults');
    }
  }, []);

  function closeAllPopups() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsRegistrationCompletedPopupOpen(false);
    setIsSubmitErrorVisible(false);
  }

  function handleSignInButtonClick() {
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

  function handleSignOutButtonClick() {
    localStorage.removeItem('token');
    setCurrentUser({});
    history.push('/');
  }

  function handleSearchTermChange(evt) {
    setSearchTerm(evt.target.value);
  }

  function handleSearchFormSubmit(evt) {
    evt.preventDefault();

    setSearchResultsStatus('preloader');

    setNumberOfCardsShown(3);
    localStorage.setItem('searchTerm', searchTerm);
    newsApi
      .getArticles(searchTerm)
      .then((articles) => {
        setSearchResultsStatus(
          articles.length === 0 ? 'nothingFound' : 'searchResults'
        );

        const searchedArticles = articles.map((article) => {
          const searchedArticle = {};

          searchedArticle.keyword = searchTerm.toLowerCase();
          searchedArticle.title = article.title;
          searchedArticle.text = article.description;
          searchedArticle.date = article.publishedAt;
          searchedArticle.source = article.source.name;
          searchedArticle.link = article.url;
          searchedArticle.image = article.urlToImage;

          if (savedCards.length > 0) {
            const [isSaved, id] = isSearchedArticleSaved(
              searchedArticle,
              savedCards
            );
            if (isSaved) {
              searchedArticle.isSaved = true;
              searchedArticle._id = id;
            }
          }

          return searchedArticle;
        });

        setSearchedCards(searchedArticles);
        localStorage.setItem('searchedCards', JSON.stringify(searchedArticles));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleShowMoreCards() {
    setNumberOfCardsShown(numberOfCardsShown + CARD_NUMBER_INCREMENT);
  }

  function handleSignUp(email, password, name) {
    mainApi
      .signUp(email, password, name)
      .then((res) => {
        if (res) {
          setIsSignUpPopupOpen(false);
          setIsRegistrationCompletedPopupOpen(true);
        } else {
          setIsSubmitErrorVisible(true);
          throw new Error(res.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSignIn(email, password) {
    mainApi
      .signIn(email, password)
      .then((res) => {
        if (res) {
          setIsSignInPopupOpen(false);
          setToken(res.token);
        } else {
          throw new Error(res.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlePostArticle(article) {
    mainApi
      .postArticle(article, token)
      .then((article) => {
        if (article) {
          let newSearchedCards = searchedCards.map((searchedCard) => {
            if (searchedCard.link === article.link) {
              searchedCard.isSaved = true;
              searchedCard._id = article._id;
            }
            return searchedCard;
          });
          setSearchedCards(newSearchedCards);
          let newSavedCards = savedCards;
          newSavedCards.push(article);
          setSavedCards(newSavedCards);
          localStorage.setItem(
            'searchedCards',
            JSON.stringify(newSearchedCards)
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteArticle(article) {
    const articleId = article._id;
    mainApi
      .deleteArticle(article._id, token)
      .then((res) => {
        if (res) {
          let newSearchedCards = searchedCards.map((searchedCard) => {
            if (searchedCard.link === article.link) {
              delete searchedCard.isSaved;
              delete searchedCard._id;
            }
            return searchedCard;
          });
          setSearchedCards(newSearchedCards);
          let newSavedCards = savedCards.filter(
            (savedCard) => savedCard._id !== articleId
          );
          setSavedCards(newSavedCards);
          localStorage.setItem(
            'searchedCards',
            JSON.stringify(newSearchedCards)
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    mainApi
      .getUser(token)
      .then((user) => {
        if (user) {
          setCurrentUser(user);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    mainApi
      .getArticles(token)
      .then((articles) => {
        if (articles) {
          setSavedCards(articles);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={styles.block}>
        <Switch>
          <Route exact path="/">
            <Header
              onNavigationButtonClick={
                isObjectEmpty(currentUser)
                  ? handleSignInButtonClick
                  : handleSignOutButtonClick
              }
              searchTerm={searchTerm}
              handleSearchTermChange={handleSearchTermChange}
              handleSearchFormSubmit={handleSearchFormSubmit}
            />
            <Main
              cards={searchedCards}
              searchResultsStatus={searchResultsStatus}
              numberOfCardsShown={numberOfCardsShown}
              handleShowMoreCards={handleShowMoreCards}
              handlePostArticle={handlePostArticle}
              handleDeleteArticle={handleDeleteArticle}
            />
            <Footer />
            {isSignInPopupOpen && (
              <>
                <PopupWithForm
                  onCloseButtonClick={closeAllPopups}
                  onRedirectPopupButtonClick={handleRedirectPopupButtonClick}
                  type="signIn"
                  handleSignIn={handleSignIn}
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
                  handleSignUp={handleSignUp}
                  isSubmitErrorVisible={isSubmitErrorVisible}
                  setIsSubmitErrorVisible={setIsSubmitErrorVisible}
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
            <ProtectedRoute>
              <SavedNewsHeader
                onNavigationButtonClick={handleSignOutButtonClick}
                cards={savedCards}
              />
              <SavedNews
                cards={savedCards}
                handleDeleteArticle={handleDeleteArticle}
              />
              <Footer />
            </ProtectedRoute>
          </Route>

          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
