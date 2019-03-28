import React from 'react';
import { Card } from '../Cards';
import RadioButton from '../RadioButton';

class SingleQuestion extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { Question, Answer, ActualAnswer } = this.props.question;

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
        <div className="card-title">
          {Question}
        </div>
        <form action="">
          {AnswerJSX}
        </form>
      </Card>
    );
  }
}

export default SingleQuestion;