import { Redirect, Route, Switch } from 'react-router-dom';
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
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);

  function closePopups() {
    setIsSignInPopupOpen(false);
  }

  function handleNavigationButtonClick() {
    setIsSignInPopupOpen(true);
  }

  return (
    <div className={styles.block}>
      <Switch>
        <Route exact path="/">
          <Header onNavigationButtonClick={handleNavigationButtonClick} />
          <Main />
          <Footer />
          {isSignInPopupOpen && (
            <>
              <PopupWithForm onClose={closePopups} />
              <RemoveScroll />
            </>
          )}
        </Route>

        <Route exact path="/saved-news">
          <SavedNewsHeader />
          <SavedNews />
          <Footer />
        </Route>

        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
