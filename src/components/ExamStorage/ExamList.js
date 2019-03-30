import React from 'react';
import SingleExam from './SingleExam';
import { ExamStore } from '../../services/ExamService';

class ExamList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      ExamStore.Exams.map(exam => (
        <SingleExam exam={exam} userView={this.props.userView}/>
      ))
    )
  }
}

export default ExamList;