import React from 'react';
import RadioButton from '../RadioButton';

import './Question.css'

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: this.props.question,
      choice: this.props.choice
    }
  }

  render () {
    const { Question, Answer } = this.state.question;
    const AnswerJSX = [];
    for(const answer in Answer) {
      AnswerJSX.push(
        <div className="d-flex m-1">
          <RadioButton 
            index={answer} 
            value={answer} 
            label={Answer[answer]} 
            name={answer}
            onClick={this.onAnswerChange}
            checked={this.state.choice === answer}
          />
        </div>
      )
    }

    return (
      <div className="question-view">
        <div className="question-question">
          {Question}
        </div>
        <div>
          {AnswerJSX}
        </div>
      </div>
    )
  }

  onAnswerChange = (event) => {
    this.props.changeAnswer({
      questionId: this.state.question.Id,
      answer: event.target.name
    });
  }
}

export default Question;