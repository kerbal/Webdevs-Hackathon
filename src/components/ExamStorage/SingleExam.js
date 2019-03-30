import React from 'react';
import { Card } from '../Cards';
import { NavLink } from 'react-router-dom';
import { Title } from '../Title';
import { Button } from '../Buttons';
import { QuestionStore } from '../../services/QuestionService';
import { ExamStore } from '../../services/ExamService';

class SingleExam extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    const { Id, Name, Description, UserCount } = this.props.exam;
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
              <span>
                <i className="fa fa-users text-main mr-2"></i>
                {UserCount || 0}
              </span>
            </div>
          </div>
          <NavLink to={this.props.userView ? `/app/exam/${Id}` : `/app/admin/exams/edit/${Id}`}>
            <Button className="px-4 mt-3">
              {
                this.props.userView ? 
                this.props.began ? 'Tiếp tục làm bài' : 'Làm đề'
                : 'Sửa đề'
              }
            </Button>
          </NavLink>
        </Card>
      </div>
    );
  }

  componentWillMount () {
    const exam = this.props.exam;
    if(exam.QuestionList.length === 0) {
      exam.QuestionList.push(QuestionStore.Questions[0].Id);
      ExamStore.EditExam(exam);
    }
  }
}

export default SingleExam;