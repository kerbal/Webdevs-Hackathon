import axios from 'axios';
import * as route from './route';

export const register = async (account) => {
  try {
    const url = route.register;
    const response = await axios({
      method: 'put',
      url,
      data: {
        ...account
      }
    });
  }
  catch (error) {
    console.log(error.response);
    return error.response.data.message;
  }
}

export const login = async (account) => {
  try {
    const url = route.login;
    const response = await axios({
      method: 'post',
      url,
      data: {
        ...account
      }
    });
    return response.data;
  }
  catch (error) {
    console.log(error.response);
    // return error.response.data.message;
    return '- Tên đăng nhập hoặc mật khẩu không đúng!';
  }
}

export const fetchExam = async (code) => {
  try {
    const url = route.exam + code;
    const response = await axios({
      method: 'get',
      url
    });
    return response.data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

export const answerQuestion = async (code) => {
  try {
    const url = route.exam + code;
    const response = await axios({
      method: 'get',
      url
    });
    return response.exam;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

export const finishExam = async (code) => {
  try {
    const url = route.exam + code;
    const response = await axios({
      method: 'post',
      url
    });
  }
  catch (error) {
    console.log(error);
    return null;
  }
}