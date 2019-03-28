import React from 'react';
import { QuestionStore } from '../../services/QuestionService';
import SingleQuestion from './SingleQuestion';

class QuestionList extends React.Component {
  render () {
    
    return (
      QuestionStore.Questions.map(question => (
        <SingleQuestion question={question}/>
      ))
    );
  }
}

export default QuestionList;