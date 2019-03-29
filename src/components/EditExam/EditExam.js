import React from 'react';
import { ExamStore } from '../../services/ExamService';
import { Card } from '../Cards';
import { history } from '../..';
import { Link } from 'react-router-dom';

class EditExam extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: undefined,
      exam: undefined,
      fetched: false
    }
  }

  render () {
    if(!this.state.fetched) {
      return <div></div>
    }

    const { Name, Description } = this.state.exam;

    return (
      <div className="container">
        <Card>
          <Card.Title>
            Thêm đề thi
          </Card.Title>
          <div className="mt-4">
            <div className="form-group">
              <label>Tên đề thi</label>
              <textarea className="form-control"
                value={Name}
                name="Name"
                onChange={this.onInfoChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="form-group">
              <label>Mô tả</label>
              <textarea className="form-control"
                value={Description}
                name="Description"
                onChange={this.onInfoChange}
              />
            </div>
          </div>
          {
            this.state.mode === 'edit' &&
            <Link to={`/app/admin/exams/edit/${this.state.exam.Id}/questions`}>
              <button className="btn-blue border-0 mr-2">
                Sửa câu hỏi
              </button>
            </Link>
          }
          <button className="btn-blue border-0" onClick={this.onSaveExam}>
            Save
          </button>
        </Card>
      </div>
    );
  }

  async componentWillMount () {
    if(this.props.match.path.includes('add')) {
      await this.setState(() => ({
        mode: 'add',
        exam: ExamStore.DefaultExamForm()
      }));
    }
    else {
      const examId = this.props.match.params.examId;
      await this.setState(() => ({
        mode: 'edit',
        exam: ExamStore.GetExam(examId)
      }));
    }
    await this.setState(() => ({
      fetched: true
    }));
  }

  onInfoChange = (event) => {
    const prop = event.target.name.split('-')[0];
    const value = event.target.value;
    const exam = this.state.exam;
    if(prop === 'Answer') {
      const index = event.target.name.split('-')[1];
      exam[prop][index] = value;
    }
    else {
      exam[prop] = value;
    }
    this.setState(() => ({
      exam
    }));
  }

  onSaveExam = () => {
    if(this.state.mode === 'add') {
      ExamStore.AddExam(this.state.exam);
    }
    else {
      ExamStore.EditExam(this.state.exam);
    }
    history.push('/app/admin');
  }
}

export default EditExam;