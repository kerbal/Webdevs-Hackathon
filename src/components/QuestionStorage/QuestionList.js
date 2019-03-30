import React from 'react';
import { QuestionStore } from '../../services/QuestionService';
import SingleQuestion from './SingleQuestion';
import { Pagination } from '../Pagination';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: QuestionStore.Questions
    }
    QuestionStore.$subject.subscribe((questions) => {
      this.setState({ questions });
    });
  }
  render () {
    const { questions } = this.state;
    return (
      <div className="row">
        <div className="col-12">
          {questions
          .slice(0, 10)
          .map(question => (
            <div className="mt-4">
              <SingleQuestion 
                question={question}
                removeQuestion={this.onRemoveQuestion}  
              />
            </div>
          ))}
        </div>
        <div className="col-12 d-flex justify-content-center mt-5">
          <Pagination total={questions.length} pageSize={10} current={1}></Pagination>
        </div>
      </div>
    );
  }

  onRemoveQuestion = (id) => {
    QuestionStore.RemoveQuestion(id);
  }
}

export default QuestionList;