import React, { Component } from 'react';
import QuestionPort from '../QuestionPort';
import AddExamCard from '../ExamStorage/AddExamCard';
import ExamList from '../ExamStorage/ExamList';

class Admin extends Component {
  render() {
    return (
      <div className="container">
        <h2>CÂU HỎI</h2>
        <div className="row">
          <QuestionPort/>
        </div>
        <h2>&nbsp;</h2>
        <h2>ĐỀ THI</h2>
        <div className="row">
          <AddExamCard/>
          <ExamList/>
        </div>
      </div>
    );
  }
}

export default Admin;