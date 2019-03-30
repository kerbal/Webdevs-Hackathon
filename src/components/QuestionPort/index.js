import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../Cards';

import './QuestionPort.css';
import { QuestionStore } from '../../services/QuestionService';
import { Title } from '../Title';
import { Button } from '../Buttons';

class QuestionPort extends React.Component {
  render () {
    return (
      <div className="col-6">
        <Card>
          <Title>
            Kho câu hỏi
          </Title>
          <div className="mt-3 mb-3">
            Gồm {QuestionStore.Questions.length} câu hỏi
          </div>
          <NavLink to="/app/admin/questions" exact>
            <Button>
              Chỉnh sửa câu hỏi
            </Button>
          </NavLink>
        </Card>
      </div>
    )
  }
}

export default QuestionPort;