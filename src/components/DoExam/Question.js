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
    const { Question } = this.state.question;
    const AnswerJSX = [];
    for(const ans of ['A', 'B', 'C', 'D']) {
      const answer = this.state.question[`Answer${ans}`];
      AnswerJSX.push(
        <div className="form-group w-100">
          <RadioButton 
            index={ans} 
            value={answer} 
            label={answer}
            name={ans} 
            onClick={this.onAnswerChange}
            checked={this.state.choice === ans}
          />
        </div>
      )
    }

    return (
      <div className="d-flex" style={{ flexDirection: 'column' }}>
        <div style={{ flexBasis: '' }}>
        <h2 className="text-main">
          {Question}
        </h2>
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