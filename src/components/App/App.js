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

function App() {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [
    isRegistrationCompletedPopupOpen,
    setIsRegistrationCompletedPopupOpen,
  ] = useState(false);

  function closePopups() {
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

  return (
    <div className={styles.block}>
      <Switch>
        <Route exact path="/">
          <Header
            isLoggedIn={isLoggedIn}
            onNavigationButtonClick={handleNavigationButtonClick}
          />
          <Main />
          <Footer />
          {isSignInPopupOpen && (
            <>
              <PopupWithForm
                onClose={closePopups}
                onRedirectPopupButtonClick={handleRedirectPopupButtonClick}
                type="signIn"
              />
              <RemoveScroll />
            </>
          )}
          {isSignUpPopupOpen && (
            <>
              <PopupWithForm
                onClose={closePopups}
                onRedirectPopupButtonClick={handleRedirectPopupButtonClick}
                type="signUp"
              />
              <RemoveScroll />
            </>
          )}
          {isRegistrationCompletedPopupOpen && (
            <>
              <PopupWithForm
                onClose={closePopups}
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
          <SavedNewsHeader
            isLoggedIn={isLoggedIn}
            onNavigationButtonClick={handleSignOut}
          />
          <SavedNews />
          <Footer />
        </Route>

        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
