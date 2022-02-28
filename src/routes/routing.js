import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

import { Login } from '../pages/Login';
import { Products } from '../pages/Products';

function CustomRoute({ isPrivate, ...rest}) {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (isPrivate && !authenticated) {
    return <Redirect to='/'/>
  }

  return <Route {...rest} />
}


export default function Routing() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Login} />
      <CustomRoute isPrivate exact path="/products" component={Products} />
    </Switch>
  )
}