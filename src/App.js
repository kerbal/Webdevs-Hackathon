import React, { Component } from 'react';
import {  Switch } from "react-router-dom";
import { Header } from './components/Header';
import { PrivateRoute } from './containers/CustomRoute';
import { Home } from './routes/Home';
import { LeaderBoardPage } from './routes/LeaderBoard';
import Admin from './components/Admin';
import QuestionStorage from './components/QuestionStorage/QuestionStorage';
import EditQuestion from './components/EditQuestion';
import EditExam from './components/EditExam/EditExam';
import EditExamQuestion from './components/EditExam/EditExamQuestion';
import DoExam from './components/DoExam/DoExam';
import { Footer } from './components/Footer';
import History from './components/History/History';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div style={{paddingTop: "70px"}} className="bg-grey">
          <Switch>
            <PrivateRoute path="/app" exact component={Home}></PrivateRoute>
            <PrivateRoute path="/app/leaderboard" component={LeaderBoardPage}></PrivateRoute>
            <PrivateRoute path="/app/history" exact component={History}></PrivateRoute>
            <PrivateRoute path="/app/admin" exact component={Admin}></PrivateRoute>
            <PrivateRoute path="/app/admin/questions" exact component={QuestionStorage}></PrivateRoute>
            <PrivateRoute path="/app/admin/questions/add" exact component={EditQuestion}></PrivateRoute>
            <PrivateRoute path="/app/admin/questions/edit/:questionId" exact component={EditQuestion}></PrivateRoute>
            <PrivateRoute path="/app/admin/exams/add" exact component={EditExam}></PrivateRoute>
            <PrivateRoute path="/app/admin/exams/edit/:examId" exact component={EditExam}></PrivateRoute>
            <PrivateRoute path="/app/admin/exams/edit/:examId/questions" exact component={EditExamQuestion}></PrivateRoute>
            <PrivateRoute path="/app/exam/:examId" exact component={DoExam}></PrivateRoute>
          </Switch>
        </div>
        <Footer style={{ marginTop: '3rem' }}></Footer>
      </div>
    );
  }
}

export default App;
