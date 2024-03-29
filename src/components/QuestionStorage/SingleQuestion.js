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
    const { Id, Question, Answer} = this.props.question;

    const AnswerJSX = [];
    for(const ans of ['A', 'B', 'C', 'D']) {
      const answer = this.props.question[`Answer${ans}`];
      AnswerJSX.push(
        <div className="form-group w-100">
          <RadioButton 
            index={ans} 
            value={answer} 
            label={answer}
            name={ans} 
            onClick={this.onActualAnswerChange}
            checked={Answer === ans}
          />
        </div>
      )
    }

    return (
      <Card>
        <div className="row">
          <div className="col-12 col-md-1 mb-3">
            <Link to={`/admin/questions/edit/${Id}`}>
              <button className="edit-btn">
                <i className="fa fa-pencil p-1"/>
              </button>
            </Link>
            <button className="remove-btn" onClick={this.onRemoveQuestion}>
              <i className="fa fa-trash p-1"/>
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
    // QuestionStore.RemoveQuestion(this.props.question.Id);
    this.props.removeQuestion(this.props.question.Id);
  }
}

export default SingleQuestion;