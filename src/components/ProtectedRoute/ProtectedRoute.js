import { Redirect, Route } from 'react-router-dom';
import { isObjectEmpty } from '../../utils/helpers';

function ProtectedRoute({ component: Component, ...props }) {
  const isLoggedIn = !isObjectEmpty(props.currentUser);

  return (
    <Route>
      {() => (isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)}
    </Route>
  );
}

export default ProtectedRoute;
