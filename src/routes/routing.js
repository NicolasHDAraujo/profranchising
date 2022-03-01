import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

import { Login } from '../pages/Login';
import { Products } from '../pages/Products';
import { Page404 } from '../pages/Page404';
import { Form } from '../pages/Form';

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
      <CustomRoute isPrivate exact path="/products/form" component={Form} />
      <CustomRoute isPrivate path="*" component={Page404} />
    </Switch>
  )
}