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
            <Link to="/app/admin/questions/add">
              <Button>
                <i className="fa fa-plus"></i> Thêm câu hỏi
              </Button>
            </Link>
          </div>
          <div className="col-12">
            <Search></Search>
          </div>
        </div>
        <QuestionList/>
      </div>
    )
  }
}

export default QuestionStorage;