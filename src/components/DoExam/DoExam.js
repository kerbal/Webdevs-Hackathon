import React from 'react';
import Question from './Question';
import { AuthService } from '../../services/AuthService';
import { ExamStore } from '../../services/ExamService';
import { QuestionStore } from '../../services/QuestionService';
import QuestionBrowser from '../EditExam/QuestionBrowser';
import { Button } from '../Buttons';
import { history } from '../..';
import { UserService } from '../../services/UserService';
import { Card } from '../Cards';
import { Title } from '../Title';

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
      <div className="container">
        <Title className="text-center my-4">{exam.Name}</Title>
        <Card>
        <Question 
          question={question}
          choice={user.Exam.Answer[question.Id]}
          changeAnswer={this.onChangeAnswer}
        />
        </Card>
        <QuestionBrowser
          current={questionIndex}
          questions={exam.QuestionList}
          onChangeQuestion={this.onChangeQuestion}
        />
        <Button className="w-100 mt-4 font-weight-bold" onClick={this.onSubmit}>
          <i className="fa fa-check-circle mr-2"></i>Nộp bài
        </Button>
      </div>
    )
  }
  
  async componentWillMount () {
    const exam = ExamStore.GetExam(this.props.match.params.examId);
    if(exam && user.Exam.ExamId === '') {
      user.Exam = {
        ExamId: exam.Id,
        Answer: {},
        StartTime: new Date().getTime(),
        EndTime: 0,
        Score: -1
      };
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
    UserService.EditUser(user);
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
    user.Exam.EndTime = new Date().getTime();
    UserService.EditUser(user);
    history.push('/app/history');
  }
}

export default DoExam;