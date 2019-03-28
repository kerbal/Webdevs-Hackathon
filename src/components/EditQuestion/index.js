import React from 'react';
import { QuestionStore } from '../../services/QuestionService';

class EditQuestion extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: undefined
    }
  }

  render () {
    console.log(this.state.question);
    return (
      <div>

      </div>
    )
  }

  async componentWillMount () {
    if(this.props.match.path.includes('add')) {
      await this.setState(() => ({
        question: QuestionStore.DefaultQuestionForm()
      }));
    }
    else {
      const questionId = this.props.match.params.questionId;
      await this.setState(() => ({
        question: QuestionStore.GetQuestion(questionId)
      }));
    }
  }
}

export default EditQuestion;