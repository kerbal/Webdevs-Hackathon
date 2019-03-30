import React from 'react';
import { Title } from '../../components/Title';
import { LeaderBoard } from '../../components/LeaderBoard';
import { Pagination } from '../../components/Pagination';

export function LeaderBoardPage() {
  return (
    <div className="container">
      <LeaderBoard className="my-4">
        <Title className="text-center my-3">Bảng vàng thành tích</Title>
        <div className="row">
          <div className="col-md-4">
          {Array.from(Array(10)).map((_, idx) => (
            <LeaderBoard.Cell key={idx+1}>Hiền tài {idx+1}</LeaderBoard.Cell>
          ))}
          </div>
          <div className="col-md-4">
          {Array.from(Array(10)).map((_, idx) => (
            <LeaderBoard.Cell key={idx+11}>Hiền tài {idx+11}</LeaderBoard.Cell>
          ))}
          </div>
          <div className="col-md-4">
          {Array.from(Array(10)).map((_, idx) => (
            <LeaderBoard.Cell key={idx+21}>Hiền tài {idx+21}</LeaderBoard.Cell>
          ))}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Pagination total={50} pageSize={10} current={1}></Pagination>
        </div>
      </LeaderBoard>
    </div>
  )
}