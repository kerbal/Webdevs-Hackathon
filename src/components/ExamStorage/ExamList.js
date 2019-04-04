import React from 'react';
import SingleExam from './SingleExam';
import { ExamStore } from '../../services/ExamService';
import {AuthService} from '../../services/AuthService';
import { UserService } from '../../services/UserService';

class ExamList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const user = UserService.FetchUser(AuthService.user.Username, AuthService.user.Password);
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