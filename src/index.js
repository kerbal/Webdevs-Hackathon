import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import App from './App';
import Admin from './Admin';
import * as serviceWorker from './serviceWorker';

import { Router, Switch} from 'react-router-dom';
import { AuthRoute, PrivateRoute, AdminRoute } from './containers/CustomRoute';
import { LandingPage } from './routes/LandingPage';

const createHistory = require('history').createBrowserHistory;
export const history = createHistory();

class Index extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <AuthRoute path="/" exact component={LandingPage}></AuthRoute>
          <PrivateRoute path="/app" component={App}></PrivateRoute>
          <AdminRoute path="/admin" component={Admin}></AdminRoute>
        </Switch>
      </>
    )
  }
}

ReactDOM.render(
<Router history={history}>
  <Index />
</Router>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
