import { Route, Switch } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Products } from '../pages/Products';


export default function Routing() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/products" component={Products} />
    </Switch>
  )
}