import React from 'react';
import { Card } from '../Cards';
import cx from 'classnames';

import './QuestionBrowser.css';

class QuestionBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props.current);
    return (
      <Card className="quest-pg mt-4">
      <div>
      {
        this.props.questions.map((question, index) => (
          <span id={index} onClick={this.onChangeQuestion} 
            className={cx("d-inline-block pointer p-2 text-center bdr-max quest-pg__cell", {"bg-main text-white": this.props.current === index})}>{index + 1}</span>
        ))
      }
      </div>
      </Card>
    )
  }

  onChangeQuestion = (event) => {
    this.props.onChangeQuestion(Number(event.target.id));
  }
}

export default QuestionBrowser;