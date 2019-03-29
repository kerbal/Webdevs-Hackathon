import React from 'react';
import { Card } from '../Cards';
import { Link } from 'react-router-dom';

class SingleExam extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    const { Id, Name, Description } = this.props.exam;
    return (
      <div className="col-4">
        <Link to={`/app/admin/exams/edit/${Id}`}>
          <Card>
            <Card.Title>
              {Name}
            </Card.Title>
            <div className="mt-3">
              {Description}
            </div>
          </Card>
        </Link>
      </div>
    );
  }
}

export default SingleExam;