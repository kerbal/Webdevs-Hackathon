import { LocalStorageService } from "./LocalStorageService";
import uuid from 'uuid';
import { Subject } from "../utils/Observable";

const exams = [
  {
    Id: uuid(),
    Name: 'Đề A',
    Description: 'Bộ đề Toán, Lý, Hóa',
    QuestionList: [],
  },
  {
    Id: uuid(),
    Name: 'Đề B',
    Description: 'Bộ đề Văn, Sử, Địa',
    QuestionList: [],
  }
];

class ExamService {
  $subject = new Subject();
  
  constructor () {
    this.Exams = LocalStorageService.ReadData('exams');
    if(this.Exams === null) {
      this.Exams = exams;
      LocalStorageService.WriteData('exams', this.Exams);
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

  DefaultExamForm () {
    return ({
      Id: uuid(),
      Name: '',
      QuestionList: [],
    });
  }
}

export const ExamStore = new ExamService();