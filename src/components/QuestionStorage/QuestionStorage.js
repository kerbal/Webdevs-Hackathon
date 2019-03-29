import React from 'react';
import QuestionList from './QuestionList';
import { Link } from 'react-router-dom';

class QuestionStorage extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="">
          <div className="container">
            <Link to="/app/admin/questions/add">
              <button>
                add
              </button>
            </Link>
          </div>
        </div>
        <QuestionList/>
      </div>
    )
  }
}

export default QuestionStorage;