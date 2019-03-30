import React, { Component } from 'react';
import QuestionPort from '../QuestionPort';
import AddExamCard from '../ExamStorage/AddExamCard';
import ExamList from '../ExamStorage/ExamList';
import { Card } from '../Cards';
import { Title } from '../Title';
import { ExamStore } from '../../services/ExamService';
import { Button } from '../Buttons';
import { QuestionStore } from '../../services/QuestionService';

class Admin extends Component {
  render() {
    return (
      <div className="container my-4">
        <div className="row my-5">
          <div className="col-12">
            <Title className="text-center">Trang chủ</Title>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-6">
            <Card>
              <Title>Kho câu hỏi</Title>
              <p className="my-3">Gồm {QuestionStore.Questions.length} Đề thi</p>
              <Button className="px-4">Chi tiết</Button>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <Title>Kho đề</Title>
              <p className="my-3">Gồm {ExamStore.Exams.length} Đề thi</p>
              <Button className="px-4">Chi tiết</Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;