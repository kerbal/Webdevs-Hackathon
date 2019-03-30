import React, { Component } from 'react';
import {  Switch } from "react-router-dom";
import { Header } from './components/Header';
import { PrivateRoute } from './containers/CustomRoute';
import { Home } from './routes/Home';
import { LeaderBoardPage } from './routes/LeaderBoard';
import DoExam from './components/DoExam/DoExam';
import { Footer } from './components/Footer';
import History from './components/History/History';
import NavigationBar from './components/NavigationBar/NavigationBar';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div style={{paddingTop: "70px", minHeight: '80vh'}} className="bg-grey">
          <NavigationBar 
            pathname={this.props.location.pathname}
            except={['add', 'edit']}  
          />
          <Switch>
            <PrivateRoute path="/app" exact component={Home}></PrivateRoute>
            <PrivateRoute path="/app/leaderboard" component={LeaderBoardPage}></PrivateRoute>
            <PrivateRoute path="/app/history" component={History}></PrivateRoute>
            <PrivateRoute path="/app/exam/:examId" exact component={DoExam}></PrivateRoute>
          </Switch>
        </div>
        <Footer style={{ marginTop: '3rem' }}></Footer>
      </div>
    );
  }
}

export default App;
