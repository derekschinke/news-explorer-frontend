import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';

function App() {
  return (
    <div className={styles.block}>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
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
