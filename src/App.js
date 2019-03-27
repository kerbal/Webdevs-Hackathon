import React, { Component } from 'react';
import { Switch } from "react-router-dom";
import { Header } from './components/Header';
import { PrivateRoute } from './containers/CustomRoute';
import { Home } from './routes/Home';
import { LeaderBoard } from './routes/LeaderBoard';
import { History } from './routes/History';

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div style={{paddingTop: "70px"}}>
          <Switch>
            <PrivateRoute path="/app" exact component={Home}></PrivateRoute>
            <PrivateRoute path="/app/leaderboard" component={LeaderBoard}></PrivateRoute>
            <PrivateRoute path="/app/history" component={History}></PrivateRoute>
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
