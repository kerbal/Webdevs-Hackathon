import React from 'react';
import { QuestionStore } from '../../services/QuestionService';
import { Card } from '../Cards';
import RadioButton from '../RadioButton';
import { history } from '../..';
import { Title } from '../Title';
import { Button } from '../Buttons';
import cx from 'classnames';

class EditQuestion extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: undefined,
      mode: undefined,
      alert: undefined
    }
  }

  render () {
    const { Question, Answer } = this.state.question;
    const alert = this.state.alert;

    const AnswerJSX = [];
    for(const ans of ['A', 'B', 'C', 'D']) {
      const answer = this.state.question[`Answer${ans}`];
      AnswerJSX.push(
        <div className="form-group w-100">
          <label>
            <RadioButton 
              index={ans} 
              value={answer} 
              label={"Đáp án " + ans}
              name={ans} 
              onClick={this.onActualAnswerChange}
              checked={Answer === ans}
            />
          </label>
          <textarea 
            value={answer}
            className="form-control mt-3"
            name={`Answer${ans}`}
            onChange={this.onInfoChange}
            placeholder={`Nhập đáp án ${ans}...`}
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
          {
            alert && 
            <div className={cx("alert my-3", {"alert-danger": !alert.success, "alert-success": alert.success})}>
              <div style={{whiteSpace: 'pre-line'}}>
                {alert.message}
              </div>
            </div>
          }
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
    question[prop] = value;
    this.setState(() => ({
      question
    }));
  }

  onActualAnswerChange = (event) => {
    const ans = event.target.name;
    const question = this.state.question;
    question.Answer = ans;
    this.setState(() => ({
      question
    }));
  }

  onSaveQuestion = () => {
    let response = undefined;
    if(this.state.mode === 'add') {
      response = QuestionStore.AddQuestion(this.state.question);
    }
    else {
      response = QuestionStore.EditQuestion(this.state.question);
    }
    if(response) {
      this.setState({
        alert: { 
          success: false, 
          message: response.join('\n')
        }
      });
    }
    else {
      if(document.referrer.includes('/admin/exams/edit')) {
        history.push('/admin');
      }
      else {
        history.push('/admin/questions');
      }
    }
  }

  onRemoveQuestion = () => {
    QuestionStore.RemoveQuestion(this.state.question.Id);
    history.push('/app/admin/questions');
  }
}

export default EditQuestion;