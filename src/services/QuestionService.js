import { LocalStorageService } from "./LocalStorageService";
import uuid from 'uuid';
import { Subject } from "../utils/Observable";
import { ExamStore } from "./ExamService";
import validate from 'validate.js';

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
    const response = this.validate(question);
    if(response) {
      return response;
    }
    else {
      this.Questions.push(question);
      LocalStorageService.WriteData('questions', this.Questions);
    }
  }

  EditQuestion (question) {
    const response = this.validate(question);
    if(response) {
      return response;
    }
    else {
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
  }

  RemoveQuestion (Id) {
    this.Questions = this.Questions.filter(qs => qs.Id !== Id);
    LocalStorageService.WriteData('questions', this.Questions);
    this.$subject.broadcast(this.Questions);
    for(const exam of ExamStore.Exams) {
      exam.QuestionList = exam.QuestionList.filter(qs => qs !== Id);
    }
    LocalStorageService.WriteData('exams', ExamStore.Exams);
  }

  DefaultQuestionForm (Question = 'Câu hỏi') {
    return ({
      Id: uuid(), 
      Question,
      AnswerA: 'Đáp án A',
      AnswerB: 'Đáp án B',
      AnswerC: 'Đáp án C',
      AnswerD: 'Đáp án D',
      Answer: 'A'
    });
  }

  GenQuestion () {
    this.Questions = [];
    for(let i = 0; i < 50; i++) {
      this.Questions.push(this.DefaultQuestionForm(`Câu hỏi thứ ${i + 1}`));
    }
    LocalStorageService.WriteData('questions', this.Questions);
  }

  constrains = {
    Question: {
      presence: true,
      length: {
        minimum: 1,
        message: '- Không được bỏ trống câu hỏi!'
      }
    },
    AnswerA: {
      presence: true,
      length: {
        minimum: 1,
        message: '- Không được bỏ trống đáp án A!'
      }
    },
    AnswerB: {
      presence: true,
      length: {
        minimum: 1,
        message: '- Không được bỏ trống đáp án B!'
      }
    },
    AnswerC: {
      presence: true,
      length: {
        minimum: 1,
        message: '- Không được bỏ trống đáp án C!'
      }
    },
    AnswerD: {
      presence: true,
      length: {
        minimum: 1,
        message: '- Không được bỏ trống đáp án D!'
      }
    },
    Answer: {
      presence: true,
      length: {
        minimum: 1,
        maximum: 1,
        message: '- Phải chọn 1 câu là câu trả lời!'
      }
    }
  }

  validate (question) {
    return validate(question, this.constrains, {format: 'flat', fullMessages: false});
  }
};

export const QuestionStore = new QuestionService();