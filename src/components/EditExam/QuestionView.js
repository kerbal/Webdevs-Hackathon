import React from 'react';
import RadioButton from '../RadioButton';
import { Link } from 'react-router-dom';
import './QuestionView.css';
import { Card } from '../Cards';

class QuestionView extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if(!this.props.question) {
      return <div></div>;
    }

    const { Id, Question, Answer } = this.props.question;

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
      <Card className="question-view flex-grow-1">
          <div className="row" style={{height: '100%'}}>
            <div className="col-1">
              <Link to={`/admin/questions/edit/${Id}`}>
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
    this.props.removeQuestion(this.props.question.Id);
  }
}

export default QuestionView;