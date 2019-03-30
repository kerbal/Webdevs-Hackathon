import React from 'react';
import Question from './Question';
import { AuthService } from '../../services/AuthService';
import { ExamStore } from '../../services/ExamService';
import { QuestionStore } from '../../services/QuestionService';
import QuestionBrowser from '../EditExam/QuestionBrowser';
import { Button } from '../Buttons';

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
        <Button onClick={this.onSubmit}>
          Finish
        </Button>
      </div>
    )
  }
  
  async componentWillMount () {
    const user = AuthService.GetUser(AuthService.user);
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
    AuthService.EditUser(user);
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
    const {user, exam} = this.state;
    let score = 0;
    for(const questionId of exam.QuestionList) {
      const question = QuestionStore.GetQuestion(questionId);
      if(user.Exam.Answer[questionId] === question.ActualAnswer) {
        score++;
      }
    }
    user.Exam.Score = score;
    AuthService.EditUser(user);
  }
}

export default DoExam;