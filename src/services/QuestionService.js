import { LocalStorageService } from "./LocalStorageService";
import uuid from 'uuid';
import { Subject } from "../utils/Observable";

export class QuestionService {
  $subject = new Subject();
  constructor () {
    this.Questions = LocalStorageService.ReadData('questions');
    if(this.Questions === null) {
      this.GenQuestion();
    }
  }

  GetQuestion (id) {
    return this.Questions.find(qs => qs.Id === id);
  }

  AddQuestion (question) {
    this.Questions.push(question);
    LocalStorageService.WriteData('questions', this.Questions);
  }

  EditQuestion (question) {
    this.Questions = this.Questions.map(qs => {
      if(qs.Id === question.Id) {
        return question;
      }
      else {
        return qs;
      }
    });
    LocalStorageService.WriteData('questions', this.Questions);
  }

  RemoveQuestion (Id) {
    this.Questions = this.Questions.filter(qs => qs.Id !== Id);
    LocalStorageService.WriteData('questions', this.Questions);
    this.$subject.broadcast(this.Questions);
  }

  DefaultQuestionForm (Question = '', Answer = {A: 'Đáp án A',B: 'Đáp án B',C: 'Đáp án C',D: 'Đáp án D'}, ActualAnswer = 'A') {
    return ({
      Id: uuid(), 
      Question,
      Answer,
      ActualAnswer
    });
  }

  GenQuestion () {
    this.Questions = [];
    for(let i = 0; i < 50; i++) {
      this.Questions.push(this.DefaultQuestionForm(`Câu hỏi thứ ${i + 1}`));
    }
    LocalStorageService.WriteData('questions', this.Questions);
  }
};

export const QuestionStore = new QuestionService();