import React from 'react';
import { Card } from '../Cards';
import RadioButton from '../RadioButton';
import { Link } from 'react-router-dom';

import './EditButton.css';
import { QuestionStore } from '../../services/QuestionService';

class SingleQuestion extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { Id, Question, Answer, ActualAnswer } = this.props.question;

    const AnswerJSX = [];
    for(const answer in Answer) {
      AnswerJSX.push(
        <RadioButton
          name={Question}
          value={answer}
          label={Answer[answer]}
          checked={answer === ActualAnswer}
        />
      );
    }

    return (
      <Card>
        <div className="row">
          <div className="col-1">
            <Link to={`/app/admin/questions/edit/${Id}`}>
              <button className="edit-btn">
                <i className="fa fa-pencil"/>
              </button>
            </Link>
            <button className="remove-btn" onClick={this.onRemoveQuestion}>
              <i className="fa fa-trash"/>
            </button>
          </div>
          <div className="col-11">
            <div className="card-title">
              {Question}
            </div>
            <form action="">
              {AnswerJSX}
            </form>    
          </div>
        </div>
      </Card>
    );
  }

  onRemoveQuestion = () => {
    QuestionStore.RemoveQuestion(this.props.question.Id);
  }
}

export default SingleQuestion;