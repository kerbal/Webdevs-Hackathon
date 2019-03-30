import React from 'react';
import QuestionListPanel from './QuestionListPanel';
import { ExamStore } from '../../services/ExamService';
import QuestionView from './QuestionView';
import { QuestionStore } from '../../services/QuestionService';
import QuestionBrowser from './QuestionBrowser';
import { Button } from '../Buttons';
import { NavLink } from 'react-router-dom';
import { Title } from '../Title';
class EditExamQuestion extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      exam: undefined,
      questionIndex: 0,
      fetched: false
    }
  }

  render () {
    if(!this.state.fetched) {
      return <div></div>
    }

    return (
      <div className="container my-4">
      <div class="row">
        <div class="col-12"><Title className="text-center mb-4" size="3">{this.state.exam.Name}</Title></div>
      </div>
      <div className="row">
        <div className="col-4">
          <NavLink to='/app/admin/questions/add'>
            <Button className="w-100 mb-4">
              <i className="fa fa-plus mr-2"></i>Thêm câu hỏi mới
            </Button>
          </NavLink>
          <QuestionListPanel 
            onAddQuestion={this.onAddQuestion}
            exam={this.state.exam}  
          />
        </div>
        <div className="col-8 d-flex flex-column">
          <QuestionView
            question={QuestionStore.GetQuestion(this.state.exam.QuestionList[this.state.questionIndex])} 
            removeQuestion={this.removeQuestion}
          />
          <QuestionBrowser
            current={this.state.questionIndex}
            questions={this.state.exam.QuestionList}
            onChangeQuestion={this.onPageChange}  
          />
        </div>
      </div>
      </div>
      
    )
  }

  async componentWillMount () {
    const examId = this.props.match.params.examId;
    await this.setState(() => ({
      mode: 'edit',
      exam: ExamStore.GetExam(examId),
      fetched: true
    }));
  }

  onAddQuestion = (questionId) => {
    const exam = this.state.exam;
    if(!exam.QuestionList.includes(questionId)) {
      exam.QuestionList.push(questionId);
      ExamStore.EditExam(exam);
      this.setState(() => ({
        exam
      }));
    }
  }

  onPageChange = (questionIndex) => {
    this.setState(() => ({
      questionIndex
    }));
  }

  removeQuestion = (id) => {
    const exam = this.state.exam;
    exam.QuestionList = exam.QuestionList.filter(qsId => qsId !== id);
    this.setState(() => ({
      exam
    }));
    ExamStore.EditExam(exam);
  }
}

export default EditExamQuestion;