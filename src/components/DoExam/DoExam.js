import React from 'react';
import Question from './Question';
import AuthenticationService from '../../services/AuthService';
import { ExamStore } from '../../services/ExamService';
import { QuestionStore } from '../../services/QuestionService';
import QuestionBrowser from '../EditExam/QuestionBrowser';

class DoExam extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: undefined,
      exam: undefined,
      questionIndex: 0,
      fetched: false
    }
  }

  render () {
    if(!this.state.fetched) {
      return <div></div>;
    }

    const { exam, questionIndex, user } = this.state;
    const question = QuestionStore.GetQuestion(exam.QuestionList[questionIndex]);
    return (
      <div>
        <Question 
          question={question}
          choice={user.Exam.Answer[question.Id]}
          changeAnswer={this.onChangeAnswer}
        />
        <QuestionBrowser
          questions={exam.QuestionList}
          onChangeQuestion={this.onChangeQuestion}
        />
        <button>
          Finish
        </button>
      </div>
    )
  }
  
  async componentWillMount () {
    const user = AuthenticationService.GetUser(AuthenticationService.user);
    const exam = ExamStore.GetExam(this.props.match.params.examId);
    if(exam && user.Exam.ExamId === '') {
      user.Exam.Id = exam.Id;
      await this.setState(() => ({
        user,
        exam,
        fetched: true
      }));
    }
  }

  onChangeAnswer = async ({questionId, answer}) => {
    const user = this.state.user;
    user.Exam.Answer[questionId] = answer;
    AuthenticationService.EditUser(user);
    await this.setState(() => ({
      fetched: false
    }))
    await this.setState(() => ({
      user,
      fetched: true 
    }));
  }

  onChangeQuestion = async (questionIndex) => {
    await this.setState(() => ({
      fetched: false
    }))
    this.setState(() => ({
      questionIndex,
      fetched: true
    }));
  }

  onSubmit = () => {
    
  }
}

export default DoExam;