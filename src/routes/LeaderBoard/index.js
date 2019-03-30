import React from 'react';
import { Title } from '../../components/Title';
import { LeaderBoard } from '../../components/LeaderBoard';
import { Pagination } from '../../components/Pagination';
import { UserService } from '../../services/UserService';

export function LeaderBoardPage() {
  return (
    <div className="container">
      <LeaderBoard className="my-4">
        <Title className="text-center my-3">Bảng vàng thành tích</Title>
        <div className="row">
          
          {UserService.Users
          .filter(user => !user.IsAdmin)
          .sort((a, b) => a.Exam.Score > b.Exam.Score)
          .slice(0, 30)
          .map((user, idx) => (
            <div className="col-md-4">
              <LeaderBoard.Cell key={user.Username} icon={idx < 10}>
                <span>{user.Name}</span>
                <span className="float-right">{user.Exam.Score}</span>
              </LeaderBoard.Cell>
            </div>
          ))}
          
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Pagination total={50} pageSize={10} current={1}></Pagination>
        </div>
      </LeaderBoard>
    </div>
  )
}