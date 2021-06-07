import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { isObjectEmpty } from '../../utils/helpers';

function ProtectedRoute(props) {
  const currentUser = useContext(CurrentUserContext);
  const isLoggedIn = !isObjectEmpty(currentUser);

  return (
    <Route>
      {() => (isLoggedIn ? <>{props.children}</> : <Redirect to="/" />)}
    </Route>
  );
}

export default ProtectedRoute;
