import React from 'react';
import SingleQuestion from '../QuestionStorage/SingleQuestion';
import { Card } from '../Cards';

class QuestionView extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if(!this.props.question) {
      return (
        <div></div>
      )
    }
    return (
      <SingleQuestion question={this.props.question}/>
    )
  }
}

export default QuestionView;