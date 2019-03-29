import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../Cards';

import './QuestionPort.css';
import { QuestionStore } from '../../services/QuestionService';

class QuestionPort extends React.Component {
  render () {
    return (
      <div className="col-4">
        {/* <NavLink to="/ap/admin/questions"> */}
          <Card>
            <Card.Title>
              Kho câu hỏi
            </Card.Title>
            <div className="mt-3 mb-3">
              Gồm {QuestionStore.Questions.length} câu hỏi
            </div>
            <NavLink to="/app/admin/questions" exact className="edit-question-link">
              Chỉnh sửa câu hỏi
            </NavLink>
          </Card>
        {/* </NavLink> */}
      </div>
    )
  }
}

export default QuestionPort;