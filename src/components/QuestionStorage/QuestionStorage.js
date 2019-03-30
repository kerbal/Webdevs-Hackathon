import React from 'react';
import QuestionList from './QuestionList';
import { Link } from 'react-router-dom';
import { Title } from '../Title';
import { Search } from '../Search';
import { Button } from '../Buttons';

class QuestionStorage extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row my-4">
          <div className="col-12">
            <Title className="text-center">Kho câu hỏi</Title>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-12 mb-4">
            <Link to="/admin/questions/add">
              <Button className="mw-100 px-4">
                <i className="fa fa-plus mr-2"></i> Thêm câu hỏi
              </Button>
            </Link>
          </div>
          <div className="col-12">
            <Search placeholder="Tìm kiếm..."></Search>
          </div>
        </div>
        <QuestionList/>
      </div>
    )
  }
}

export default QuestionStorage;