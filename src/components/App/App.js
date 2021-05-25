import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
// import { RemoveScroll } from 'react-remove-scroll';

function App() {
  return (
    <div className={styles.block}>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
          <>
            <PopupWithForm />
            {/* <RemoveScroll /> */}
          </>
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
