import React, { Component } from 'react';
import {  Switch } from "react-router-dom";
import { Header } from './components/Header';
import { AdminRoute } from './containers/CustomRoute';
import Admin from './components/Admin';
import QuestionStorage from './components/QuestionStorage/QuestionStorage';
import EditQuestion from './components/EditQuestion';
import EditExam from './components/EditExam/EditExam';
import EditExamQuestion from './components/EditExam/EditExamQuestion';
import { Footer } from './components/Footer';
import { Exams } from './components/EditExam/Exams';
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
            <AdminRoute path="/admin" exact component={Admin}></AdminRoute>
            <AdminRoute path="/admin/questions" exact component={QuestionStorage}></AdminRoute>
            <AdminRoute path="/admin/questions/add" exact component={EditQuestion}></AdminRoute>
            <AdminRoute path="/admin/questions/edit/:questionId" exact component={EditQuestion}></AdminRoute>
            <AdminRoute path="/admin/exams" exact component={Exams}></AdminRoute>
            <AdminRoute path="/admin/exams/add" exact component={EditExam}></AdminRoute>
            <AdminRoute path="/admin/exams/edit/:examId" exact component={EditExam}></AdminRoute>
            <AdminRoute path="/admin/exams/edit/:examId/questions" exact component={EditExamQuestion}></AdminRoute>
          </Switch>
        </div>
        <Footer style={{ marginTop: '3rem' }}></Footer>
      </div>
    );
  }
}

export default App;
