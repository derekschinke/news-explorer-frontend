import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route exact path="/saved-news">
          <SavedNewsHeader />
        </Route>

        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
