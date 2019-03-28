import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../Cards';

import './QuestionPort.css';

class QuestionPort extends React.Component {
  render () {
    return (
      <Card>
        <div className="card-title">
          Kho câu hỏi
          <div className="card-sub-title">
            Số câu hỏi: 50
          </div>
        </div>
        <NavLink to="/app/admin/questions" exact className="edit-question-link">
          Chỉnh sửa câu hỏi
        </NavLink>
      </Card>
    )
  }
}

export default QuestionPort;