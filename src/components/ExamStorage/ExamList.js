import React from 'react';
import SingleExam from './SingleExam';
import { ExamStore } from '../../services/ExamService';
import AuthenticationService from '../../services/AuthService';

class ExamList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const user = AuthenticationService.GetUser(AuthenticationService.user);
    if(user.Exam.ExamId === '' || !this.props.userView) {
      return (
        ExamStore.Exams.map(exam => (
          <SingleExam exam={exam} userView={this.props.userView}/>
        ))
      )
    }
    else {
      return (
        ExamStore.Exams.map(exam => exam.Id === user.Exam.ExamId && (
          <SingleExam exam={exam} userView={this.props.userView} began/>
        ))
      )
    }
  }
}

export default ExamList;