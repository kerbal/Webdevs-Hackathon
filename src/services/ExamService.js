import { LocalStorageService } from "./LocalStorageService";
import uuid from 'uuid';
import { Subject } from "../utils/Observable";
import validate from 'validate.js';

class ExamService {
  $subject = new Subject();
  
  constructor () {
    this.Exams = LocalStorageService.ReadData('exams');
    if(this.Exams === null) {
      this.GenExam();
    }
  }

  GetExam (id) {
    return this.Exams.find(ex => ex.Id === id);
  }

  AddExam (exam) {
    const response = this.validate(exam);
    if(response) {
      return response;
    }
    else {
      this.Exams.push(exam);
      LocalStorageService.WriteData('exams', this.Exams);
    }
  }

  EditExam (exam) {
    const response = this.validate(exam);
    if(response) {
      return response;
    }
    else {
      this.Exams = this.Exams.map(ex => {
        if(ex.Id === exam.Id) {
          return exam;
        }
        else {
          return ex;
        }
      });
      LocalStorageService.WriteData('exams', this.Exams);
    }
  }

  RemoveExam (id) {
    this.Exams = this.Exams.filter(ex => ex.Id !== id);
    this.$subject.broadcast(this.Exams);
  }

  DefaultExamForm (Name = '', Description = '') {
    return ({
      Id: uuid(),
      Name,
      Description,
      QuestionList: [],
      UserCount: 0
    });
  }

  GenExam () {
    this.Exams = [];
    this.Exams.push(this.DefaultExamForm('Đề A', 'Bộ đề Toán, Lý, Hóa'));
    this.Exams.push(this.DefaultExamForm('Đề B', 'Bộ đề Văn, Sử, Địa'));
    LocalStorageService.WriteData('exams', this.Exams);
  }

  constrains = {
    Name: {
      presence: true,
      length: {
        minimum: 1,
        maximum: 20,
        message: '- Tên đề thi phải dài từ 1 - 20 kí tự!'
      }
    }
    // QuestionList: {
    //   presence: true,
    //   length: {
    //     minimum: 1,
    //     message: '- Phải có ít nhất một câu hỏi trong đề thi!'
    //   }
    // }
  }

  validate (exam) {
    return validate(exam, this.constrains, {format: 'flat', fullMessages: false});
  }
}

export const ExamStore = new ExamService();