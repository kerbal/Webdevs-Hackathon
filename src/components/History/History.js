import React from 'react';
import { ExamStore } from '../../services/ExamService';
import AuthenticationService from '../../services/AuthService';
import SingleExam from './SingleExam';
import { Title } from '../Title';

class History extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const user = AuthenticationService.GetUser(AuthenticationService.user);
    return (
      <div className="container">
        <Title>
          Kết quả làm bài
        </Title>
        {
          user.Exam.ExamId === '' ? <div>Bạn chưa làm đề nào</div> :
          <div className="row">
            <SingleExam
              exam={ExamStore.GetExam(user.Exam.ExamId)}
              user={user}
            />
          </div>
        }
        
      </div>
    )
  }
}

export default History;