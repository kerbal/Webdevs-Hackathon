import React from 'react';
import { Card } from '../Cards';
import { NavLink } from 'react-router-dom';

class SingleExam extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    const { Id, Name, Description } = this.props.exam;
    return (
      <div className="col-4">
        <Card>
          <Card.Title>
            {Name}
          </Card.Title>
          <div className="mt-3">
            {Description}
          </div>
          <br></br>
          <NavLink 
            // to={`/app/admin/exams/edit/${Id}`} 
            to={this.props.userView ? `/app/exam/${Id}` : `/app/admin/exams/edit/${Id}`}
            exact className="edit-question-link"
          >
            {this.props.userView ? `Làm đề` : `Chỉnh sửa đề`}
          </NavLink>
        </Card>
      </div>
    );
  }
}

export default SingleExam;