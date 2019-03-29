import React from 'react';
import { QuestionStore } from '../../services/QuestionService';
import './QuestionListPanel.css';
import { Card } from '../Cards';


class QuestionListPanel extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ul 
        className="list-group list-group-flush question-list-panel"
      >
        {
          QuestionStore.Questions.map(question => (
            <li className="list-group-item" onClick={this.onAddQuestion} id={question.Id}>
              {
                question.Question
              }
            </li>
          ))
        }
      </ul>
    );
  }

  onAddQuestion = (event) => {
    const questionId = event.target.id;
    this.props.onAddQuestion(questionId);
  }
}

export default QuestionListPanel;