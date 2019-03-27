import React, { Component } from 'react';
import { Switch } from "react-router-dom";
import { Header } from './components/Header';
import { PrivateRoute } from './containers/CustomRoute';
import { Home } from './routes/Home';
import { LeaderBoard } from './routes/LeaderBoard';

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Switch>
          <PrivateRoute path="/app" exact component={Home}></PrivateRoute>
          <PrivateRoute path="/app/leaderboard" component={LeaderBoard}></PrivateRoute>
          <PrivateRoute path="/app/history" component={History}></PrivateRoute>
        </Switch>
      </>
    );
  }
}

export default App;
