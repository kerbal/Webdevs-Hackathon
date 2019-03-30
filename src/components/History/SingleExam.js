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
          { 
            (this.props.user.Exam.Score > -1 &&
            <div className="row mt-3">
              <div className="col-12">
                <span className="mr-4">
                  <i className="fa fa-question-circle text-main mr-2"></i>
                  Điểm:&nbsp;
                  {Math.max(this.props.user.Exam.Score, 0)}/
                  {this.props.exam.QuestionList.length}
                </span>
                <span className="mr-4"><i className="fa fa-hourglass-half text-main mr-2"></i>
                  Thời gian làm bài:&nbsp;
                  {Math.round((this.props.user.Exam.EndTime - this.props.user.Exam.StartTime) / 60000, 3)} phút &nbsp;
                  {Math.round((this.props.user.Exam.EndTime - this.props.user.Exam.StartTime) / 1000 % 60, 3)} giây
                </span>
              </div>
            </div>) ||
            <div>
              <br></br>
              <NavLink to={`/app/exam/${Id}`}>
                <Button>
                  Tiếp tục làm bài
                </Button>
              </NavLink>
            </div>
          }
        </Card>
      </div>
    );
  }
}

export default SingleExam;