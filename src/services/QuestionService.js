import { LocalStorageService } from "./LocalStorageService";
import uuid from 'uuid';

const questions = [
  {
    Id: uuid(),
    Question: '550 : 2 bằng bao nhiêu.',
    Answer: {
      A: '225',
      B: '250',
      C: '275',
      D: '300',
    },
    ActualAnswer: 'C'
  },
  {
    Id: uuid(),
    Question: '1 + 1 = ?',
    Answer: {
      A: '1',
      B: '2',
      C: '3',
      D: '4',
    },
    ActualAnswer: 'C'
  }
];

export class QuestionService {
  constructor () {
    this.Questions = LocalStorageService.ReadData('questions');
    if(this.Questions === null || this.Questions.length === 0) {
      this.Questions = questions;
      LocalStorageService.WriteData('questions', this.Questions);
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
  }

  DefaultQuestionForm () {
    return ({
      Id: uuid(), 
      Question: '',
      Answer: {
        A: '',
        B: '',
        C: '',
        D: ''
      },
      ActualAnswer: ''
    });
  }
};

export const QuestionStore = new QuestionService();