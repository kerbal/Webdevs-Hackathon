import React from 'react';
import { Card } from '../Cards';
import { NavLink } from 'react-router-dom';
import { Title } from '../Title';
import { Button } from '../Buttons';

class SingleExam extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    const { Id, Name, Description } = this.props.exam;
    return (
      <div className="col-6">
        <Card className="bsd-3 pointer">
          <Title size="3">{Name}</Title>
          {
            this.props.tag &&
            <Card.Tag className="bg-main text-white" width={50} height={50}>
              <i className="fa fa-fire"></i>
            </Card.Tag>
          }
          <div className="row mt-3">
            <div className="col-12">
              {Description}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <span className="mr-4">
                <i className="fa fa-question-circle text-main mr-2"></i>
                {this.props.exam.QuestionList.length}
              </span>
              <span className="mr-4"><i className="fa fa-hourglass-half text-main mr-2"></i> 60 phút</span>
              <span className="mr-4"><i className="fa fa-eye text-main mr-2"></i> 100 lượt xem</span>
              <span><i className="fa fa-users text-main mr-2"></i> 100 lượt làm</span>
            </div>
          </div>
          <NavLink to={`/app/exam/${Id}`}>
            <Button className="px-4 mt-3">Làm bài thi</Button>
          </NavLink>
        </Card>
      </div>
    );
  }
}

export default SingleExam;