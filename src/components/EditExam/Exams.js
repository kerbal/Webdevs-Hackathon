import React from 'react';
import ExamList from '../ExamStorage/ExamList';
import { Title } from '../Title';
import { Search } from '../Search';
import { Link } from 'react-router-dom';
import { Button } from '../Buttons';

export class Exams extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row my-4">
          <div className="col-12">
            <Title className="text-center">Kho đề thi</Title>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-12 mb-4">
            <Link to="/admin/exams/add">
              <Button className="mw-100 px-4">
                <i className="fa fa-plus mr-2"></i> Thêm đề
              </Button>
            </Link>
          </div>
          <div className="col-12">
            <Search placeholder="Tìm kiếm..."></Search>
          </div>
        </div>
        <div className="row">
          <ExamList/>
        </div>
      </div>
    )
  }
}