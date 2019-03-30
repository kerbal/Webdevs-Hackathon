import React from 'react';
import { QuestionStore } from '../../services/QuestionService';
import { Card } from '../Cards';
import RadioButton from '../RadioButton';
import { history } from '../..';
import { Title } from '../Title';

class EditQuestion extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: undefined,
      mode: undefined
    }
  }

  render () {
    const { Question, Answer, ActualAnswer } = this.state.question;

    const AnswerJSX = [];
    for(const answer in Answer) {
      AnswerJSX.push(
        <div className="d-flex m-1">
          <RadioButton 
            index={answer} 
            value={answer} 
            label={answer} 
            name={answer} 
            onClick={this.onActualAnswerChange}
            checked={ActualAnswer === answer}
          />
          <textarea 
            value={this.state.question.Answer[answer]}
            className="form-control ml-3"
            name={`Answer-${answer}`}
            onChange={this.onInfoChange}
          />
        </div>
      )
    }

    return (
      <div className="container">
        <Card>
          <Title>
            {
              this.state.mode === 'add' ? 'Thêm câu hỏi' : 'Sửa câu hỏi'
            }
          </Title>
          <div className="mt-4">
            <div className="form-group">
              <label>Câu hỏi</label>
              <textarea className="form-control"
                value={Question}
                name="Question"
                onChange={this.onInfoChange}
              />
            </div>
            {AnswerJSX}
          </div>
          <button className="btn-blue border-0" onClick={this.onSaveQuestion}>
            Save
          </button>
        </Card>
      </div>
    )
  }

  async componentWillMount () {
    if(this.props.match.path.includes('add')) {
      await this.setState(() => ({
        question: QuestionStore.DefaultQuestionForm(),
        mode: 'add'
      }));
    }
    else {
      const questionId = this.props.match.params.questionId;
      await this.setState(() => ({
        question: QuestionStore.GetQuestion(questionId),
        mode: 'edit'
      }));
    }
  }

  onInfoChange = (event) => {
    const prop = event.target.name.split('-')[0];
    const value = event.target.value;
    const question = this.state.question;
    if(prop === 'Answer') {
      const index = event.target.name.split('-')[1];
      question[prop][index] = value;
    }
    else {
      question[prop] = value;
    }
    this.setState(() => ({
      question
    }));
  }

  onActualAnswerChange = (event) => {
    const ans = event.target.name;
    const question = this.state.question;
    question.ActualAnswer = ans;
    this.setState(() => ({
      question
    }));
  }

  onSaveQuestion = () => {
    if(this.state.mode == 'add') {
      QuestionStore.AddQuestion(this.state.question);
    }
    else {
      QuestionStore.EditQuestion(this.state.question);
    }
    console.log(document.referrer);
    history.push('/app/admin/questions');
  }
}

export default EditQuestion;