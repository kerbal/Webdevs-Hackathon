import React from 'react';
import { ExamStore } from '../../services/ExamService';
import { Card } from '../Cards';
import { history } from '../..';
import { Link } from 'react-router-dom';
import { Title } from '../Title';
import { Button } from '../Buttons';
import cx from 'classnames';

class EditExam extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: undefined,
      exam: undefined,
      fetched: false,
      alert: undefined
    }
  }

  render () {
    if(!this.state.fetched) {
      return <div></div>
    }

    const { Name, Description } = this.state.exam;
    const alert = this.state.alert;
    
    return (
      <div className="container my-4">
        <Card>
          <Title>
            {
              this.state.mode === 'add' ? 'Thêm đề thi' : 'Sửa đề thi'
            }
          </Title>
          <div className="mt-4">
            <div className="form-group">
              <label>Tên đề thi</label>
              <input className="form-control"
                type="text"
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
            alert && 
            <div className={cx("alert my-3", {"alert-danger": !alert.success, "alert-success": alert.success})}>
              <div style={{whiteSpace: 'pre-line'}}>
                {alert.message}
              </div>
            </div>
          }
          <div className="mt-4">
            {
              this.state.mode === 'edit' &&
              <Link className="mr-3" to={`/admin/exams/edit/${this.state.exam.Id}/questions`}>
                <Button className="bg-primary">
                  <i className="fa fa-question-circle mr-2"></i>Sửa câu hỏi
                </Button>
              </Link>
            }
            <Button className="px-4 mr-3 bg-success" onClick={this.onSaveExam}>
              <i className="fa fa-save mr-2"></i>Lưu
            </Button>
            {
              this.state.mode === 'edit' &&
              <Button className="px-4" onClick={this.onRemoveExam}>
                <i className="fa fa-trash mr-2"></i>Xóa đề
              </Button>
            }
          </div>
        </Card>
      </div>
    );
  }

  async componentWillMount () {
    if(this.props.match.path.includes('add')) {
      await this.setState(() => ({
        mode: 'add',
        exam: JSON.parse(JSON.stringify(ExamStore.DefaultExamForm()))
      }));
    }
    else {
      const examId = this.props.match.params.examId;
      await this.setState(() => ({
        mode: 'edit',
        exam: JSON.parse(JSON.stringify(ExamStore.GetExam(examId)))
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
    let response = undefined;
    if(this.state.mode === 'add') {
      response = ExamStore.AddExam(this.state.exam);
    }
    else {
      response = ExamStore.EditExam(this.state.exam);
    }
    if(response) {
      this.setState({
        alert: { 
          success: false, 
          message: response.join('\n')
        }
      });
    }
    else {
      history.push('/admin/exams');
    }
  }

  onRemoveExam = () => {
    ExamStore.RemoveExam(this.state.exam.Id);
    history.push('/admin/exams');
  }
}

export default EditExam;