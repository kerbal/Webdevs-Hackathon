import React from 'react';
import { QuestionStore } from '../../services/QuestionService';
import SingleQuestion from './SingleQuestion';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: QuestionStore.Questions
    }
    QuestionStore.$subject.subscribe((questions) => {
      console.log(questions);
      this.setState({ questions });
    });
  }
  render () {
    return (
      <div className="row">
        {this.state.questions.map(question => (
          <div className="col-md-12 mt-4">
            <SingleQuestion question={question}/>
          </div>
        ))}
      </div>
    );
  }
}

export default QuestionList;