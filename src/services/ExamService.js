import { LocalStorageService } from "./LocalStorageService";
import uuid from 'uuid';
import { Subject } from "../utils/Observable";

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
    this.Exams.push(exam);
    LocalStorageService.WriteData('exams', this.Exams);
  }

  EditExam (exam) {
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
}

export const ExamStore = new ExamService();