import React from 'react';
import { ExamStore } from '../../services/ExamService';
import { AuthService } from '../../services/AuthService';
import SingleExam from './SingleExam';
import { Title } from '../Title';
import { UserService } from '../../services/UserService';

class History extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const user = UserService.FetchUser(AuthService.user.Username, AuthService.user.Password);
    return (
      <div className="container mb-5 mt-4">
        <Title className="text-center">
          Kết quả làm bài
        </Title>
        {
          user.Exam.ExamId === '' ? <div className="mt-4">Bạn chưa làm đề nào</div> :
          <div className="row mt-4">
            <div class="col-12">
              <SingleExam
                exam={ExamStore.GetExam(user.Exam.ExamId)}
                user={user}
              />
            </div>
          </div>
        }
        
      </div>
    )
  }
}

export default History;