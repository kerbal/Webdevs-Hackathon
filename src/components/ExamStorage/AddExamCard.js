import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../Cards';

class AddExamCard extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="col-12 my-3">
        <Link to='/admin/exams/add'>
          <Card>
            <div className="container">
              <i className="fa fa-plus"/>
            </div>
          </Card>
        </Link>
      </div>
    );
  }
}

export default AddExamCard;