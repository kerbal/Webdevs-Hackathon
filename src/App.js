import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import { LandingPage } from './routes/LandingPage';
import { Home } from './routes/Home';
import { PrivateRoute, AuthRoute } from './containers/CustomRoute';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <AuthRoute path="/" exact component={LandingPage}></AuthRoute>
          <PrivateRoute path="/home" component={Home}></PrivateRoute>
        </Router> 
      </>
    );
  }
}

export default App;
