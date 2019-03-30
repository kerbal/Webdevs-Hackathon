import React from 'react';
import { QuestionStore } from '../../services/QuestionService';
import './QuestionListPanel.css';
import { Card } from '../Cards';

class QuestionListPanel extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let questions = QuestionStore.Questions;
    questions = questions.filter(qs => {
      return !this.props.exam.QuestionList.includes(qs.Id)
    });
    return (
      <Card>
        <ul 
          className="list-group list-group-flush question-list-panel"
        >
          {
            questions.map(question =>
            (
              <li className="list-group-item" onClick={this.onAddQuestion} id={question.Id}>
                {
                  question.Question
                }
              </li>
            ))
          }
        </ul>
      </Card>
    );
  }

  onAddQuestion = (event) => {
    const questionId = event.target.id;
    this.props.onAddQuestion(questionId);
  }
}

export default QuestionListPanel;