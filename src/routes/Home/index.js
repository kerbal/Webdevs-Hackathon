import React from 'react';
import { Title } from '../../components/Title';
import { Pagination } from '../../components/Pagination';
import { Search } from '../../components/Search';
import ExamList from '../../components/ExamStorage/ExamList';
import AuthenticationService from '../../services/AuthService';
import History from '../../components/History/History';
import { Button } from '../../components/Buttons';
import { NavLink } from 'react-router-dom';

export function Home() {
  const user = AuthenticationService.GetUser(AuthenticationService.user);
  if(user.Exam.ExamId === '' || user.Exam.Score === -1) {
    return (
      <div className="container">
        <div className="row mt-4 mb-5">
          <div className="col-12">
            <Title className="text-center">Trang chủ</Title>
          </div>
        </div>
        <div>
          <div className="row mb-5">
            <div className="col-12">
              <Search placeholder="Tìm kiếm..."></Search>
            </div>
          </div>
          <div className="row">
            <ExamList userView/>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <Pagination current={1} total={50} pageSize={10}></Pagination>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="container">
        <Title>
          Bạn đã hoàn thành kì thi
        </Title>
        <NavLink to='/app/history'>
          <Button>
            Xem kết quả
          </Button>
        </NavLink>
      </div>
    )
  }
}