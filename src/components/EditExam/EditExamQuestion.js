import React from 'react';
import QuestionListPanel from './QuestionListPanel';
import { ExamStore } from '../../services/ExamService';
import QuestionView from './QuestionView';
import { QuestionStore } from '../../services/QuestionService';
import QuestionBrowser from './QuestionBrowser';

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
      <div className="row">
        <div className="col-4">
          <QuestionListPanel onAddQuestion={this.onAddQuestion}/>
        </div>
        <div className="col-8">
          <QuestionView
            question={QuestionStore.GetQuestion(this.state.exam.QuestionList[this.state.questionIndex])} 
            removeQuestion={this.removeQuestion}
          />
          <QuestionBrowser 
            questions={this.state.exam.QuestionList}
            onChangeQuestion={this.onPageChange}  
          />
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
    console.log(id);
    const exam = this.state.exam;
    exam.QuestionList = exam.QuestionList.filter(qsId => qsId !== id);
    this.setState(() => ({
      exam
    }));
    ExamStore.EditExam(exam);
  }
}

export default EditExamQuestion;