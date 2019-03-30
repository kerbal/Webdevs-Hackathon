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
      <Card>
        <Title>Kho câu hỏi</Title>
        <div className="mt-3 mb-3">
          Gồm {QuestionStore.Questions.length} câu hỏi
        </div>
        <NavLink to="/admin/questions" exact>
          <Button>
            Chỉnh sửa câu hỏi
          </Button>
        </NavLink>
      </Card>
    )
  }
}

export default QuestionPort;