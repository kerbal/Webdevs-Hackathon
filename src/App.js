import React, { Component } from 'react';
import {  Switch } from "react-router-dom";
import { Header } from './components/Header';
import { PrivateRoute, AdminRoute } from './containers/CustomRoute';
import { Home } from './routes/Home';
import { LeaderBoardPage } from './routes/LeaderBoard';
import Admin from './components/Admin';
import QuestionStorage from './components/QuestionStorage/QuestionStorage';
import EditQuestion from './components/EditQuestion';
import EditExam from './components/EditExam/EditExam';
import EditExamQuestion from './components/EditExam/EditExamQuestion';
import DoExam from './components/DoExam/DoExam';
import { Footer } from './components/Footer';
import { Exams } from './components/EditExam/Exams';
import History from './components/History/History';
import NavigationBar from './components/NavigationBar/NavigationBar';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div style={{paddingTop: "70px"}} className="bg-grey">
            <NavigationBar 
              pathname={this.props.location.pathname}
              except={['add', 'edit']}  
            />
          <Switch>
            <PrivateRoute path="/app" exact component={Home}></PrivateRoute>
            <PrivateRoute path="/app/leaderboard" component={LeaderBoardPage}></PrivateRoute>
            <PrivateRoute path="/app/history" component={History}></PrivateRoute>
            <PrivateRoute path="/app/exam/:examId" exact component={DoExam}></PrivateRoute>
            <AdminRoute path="/app/admin" exact component={Admin}></AdminRoute>
            <AdminRoute path="/app/admin/questions" exact component={QuestionStorage}></AdminRoute>
            <AdminRoute path="/app/admin/questions/add" exact component={EditQuestion}></AdminRoute>
            <AdminRoute path="/app/admin/questions/edit/:questionId" exact component={EditQuestion}></AdminRoute>
            <AdminRoute path="/app/admin/exams" exact component={Exams}></AdminRoute>
            <AdminRoute path="/app/admin/exams/add" exact component={EditExam}></AdminRoute>
            <AdminRoute path="/app/admin/exams/edit/:examId" exact component={EditExam}></AdminRoute>
            <AdminRoute path="/app/admin/exams/edit/:examId/questions" exact component={EditExamQuestion}></AdminRoute>
          </Switch>
        </div>
        <Footer style={{ marginTop: '3rem' }}></Footer>
      </div>
    );
  }
}

export default App;
