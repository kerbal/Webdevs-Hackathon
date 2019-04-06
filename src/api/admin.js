import axios from 'axios';
import * as route from './route';

export const fetchQuestions = async () => {
  try {
    const url = route.questions;
    const response = await axios({
      method: 'get',
      url
    });
    return response.questions;
  }
  catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}

export const fetchQuestion = async (id) => {
  try {
    const url = route.question;
    const response = await axios({
      method: 'get',
      url
    });
    return response.questions;
  }
  catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}

export const addQuestion = async (question) => {
  try {
    const url = route.question;
    const response = await axios({
      method: 'post',
      url,
      data: {
        ...question
      }
    });
  }
  catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}

export const editQuestion = async (question) => {
  try {
    const url = route.question;
    const response = await axios({
      method: 'post',
      url,
      data: {
        ...question
      }
    });
  }
  catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}

export const removeQuestion = async (id) => {
  try {
    const url = route.question;
    const response = await axios({
      method: 'delete',
      url,
      data: {
        id
      }
    });
  }
  catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}

export const fetchExams = async () => {
  try {
    const url = route.exams;
    const response = await axios({
      method: 'get',
      url
    });
    return response.exams;
  }
  catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}

export const fetchExam = async (id) => {
  try {
    const url = route.exam;
    const response = await axios({
      method: 'get',
      url
    });
    return response.exam;
  }
  catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}

export const addExam = async (exam) => {
  try {
    const url = route.exam;
    const response = await axios({
      method: 'post',
      url,
      data: {
        ...exam
      }
    });
  }
  catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}

export const editExam = async (exam) => {
  try {
    const url = route.exam;
    const response = await axios({
      method: 'put',
      url,
      data: {
        ...exam
      }
    });
  }
  catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}

export const removeExam = async (id) => {
  try {
    const url = route.exam;
    const response = await axios({
      method: 'delete',
      url,
      data: {
        id
      }
    });
  }
  catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}

