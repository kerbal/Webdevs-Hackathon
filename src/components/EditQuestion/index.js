import React from 'react';
import { QuestionStore } from '../../services/QuestionService';
import { Card } from '../Cards';
import RadioButton from '../RadioButton';
import { history } from '../..';
import { Title } from '../Title';
import { Button } from '../Buttons';

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
        <div className="form-group w-100">
          <label>
            <RadioButton 
              index={answer} 
              value={answer} 
              label={"Đáp án "+answer} 
              name={answer} 
              onClick={this.onActualAnswerChange}
              checked={ActualAnswer === answer}
            />
          </label>
          <textarea 
            value={this.state.question.Answer[answer]}
            className="form-control mt-3"
            name={`Answer-${answer}`}
            onChange={this.onInfoChange}
            placeholder={`Nhập đáp án ${answer}...`}
          />
        </div>
      )
    }
    let title = this.state.mode === 'add' ? 'Thêm câu hỏi' : 'Sửa câu hỏi'
    return (
      <div className="container my-5">
        <Card>
          <Title className="text-center">
            {title}
          </Title>
          <div className="mt-4">
            <div className="form-group">
              <label className="font-weight-bold">Câu hỏi</label>
              <textarea className="form-control"
                value={Question}
                name="Question"
                onChange={this.onInfoChange}
                placeholder="Nhập câu câu hỏi..."
              />
            </div>
            {AnswerJSX}
          </div>
          <Button className="w-100 bg-success mt-3" onClick={this.onSaveQuestion}>
            <i className="fa fa-save mr-2"></i> Lưu lại
          </Button>
          {
            this.state.mode === 'edit' &&
            <Button className="w-100 bg-danger mt-3" onClick={this.onRemoveQuestion}>
              <i className="fa fa-save mr-2"></i> Xóa câu hỏi
            </Button>
          }
        </Card>
      </div>
    )
  }

  async componentWillMount () {
    if(this.props.match.path.includes('add')) {
      await this.setState(() => ({
        question: JSON.parse(JSON.stringify(QuestionStore.DefaultQuestionForm())),
        mode: 'add'
      }));
    }
    else {
      const questionId = this.props.match.params.questionId;
      await this.setState(() => ({
        question: JSON.parse(JSON.stringify(QuestionStore.GetQuestion(questionId))),
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
    if(document.referrer.includes('/admin/exams/edit')) {
      history.push(document.referrer);
    }
    else {
      history.push('/app/admin/questions');
    }
  }

  onRemoveQuestion = () => {
    QuestionStore.RemoveQuestion(this.state.question.Id);
    history.push('/app/admin/questions');
  }
}

export default EditQuestion;