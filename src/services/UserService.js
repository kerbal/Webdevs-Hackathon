import { LocalStorageService } from "./LocalStorageService";
import validate from 'validate.js';
import { register as apiRegist } from "../api/user";
import { fetchLeaderboard } from "../api/public";

class _UserService {
  constructor() {
    this.Users = LocalStorageService.ReadData('users');
    if(!this.Users) {
      this.Users = [];
    }
  }

  GenUsers () {
    this.Users = [];
  }

  // GenUsers () {
  //   this.Users = [];
  //   this.Users.push(this.DefaultUserForm('admin', 'Admin', '123', true));
  //   for(let i = 0; i < 50; i++) {
  //     this.Users.push(this.DefaultUserForm(`user_${i}`, `Thí sinh ${i}`, '123'));
  //   }
  //   LocalStorageService.WriteData('users', this.Users);
  // }
  
  FetchUser (username, password) {
    return this.Users.find(user => user.Username === username && user.Password === password);
  }

  // EditUser (user) {
  //   this.Users = this.Users.map(us => {
  //     if(us.Username === user.Username) {
  //       return user;
  //     }
  //     else {
  //       return us;
  //     }
  //   });
  //   LocalStorageService.WriteData('users', this.Users);
  // }

  DefaultUserForm (Username, Fullname, Password, IsAdmin = false) {
    return ({
      Username,
      Fullname,
      Password,
      IsAdmin,
      Exam: {
        ExamId: '',
        Answer: {},
        StartTime: 0,
        EndTime: 0,
        Score: 0
      }
    });
  }

  constrains = {
    Username: {
      presence: true,
      format: {
        pattern: /^[A-Za-z0-9]*$/,
        message: '- Tên tài khoản không được chứa kí tự đặc biệt!'
      },
      length: {
        minimum: 1,
        maximum: 20,
        message: '- Tên tài khoản phải dài từ 1 - 20 kí tự'
      }
    },
    Password: {
      presence: true,
      format: {
        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: '- Mật khẩu phải có ít nhất 8 kí tự, phải có chữ hoa, chữ thường và số!'
      }
    },
    Fullname: {
      presence: true,
      format: {
        pattern: /^[A-Za-z0-9]*$/,
        message: '- Tên đầy đủ không được chứa kia tự đặc biệt!'
      },
      length: {
        minimum: 1,
        maximum: 40,
        message: '- Tên đầy đủ phải dài từ 1 - 40 kí tự!'
      }
    }
  }

  validate (account) {
    if(account.Password !== account.ConfirmPassword) {
      return ['- Xác nhận mật khẩu không khớp'];
    }
    return validate(account, this.constrains, {format: 'flat', fullMessages: false});
  }

  async register (account) {
    let response = this.validate(account);
    if(response) {
      return response;
    }
    else {
      response = await apiRegist(account);
      if(response) {
        return [response];
      }
      this.Users.push(this.DefaultUserForm(account.Username, `Thí sinh ${this.Users.length}`, account.Password, false));
      LocalStorageService.WriteData('users', this.Users);
    }
  }

  async Leaderboard () {
    const lb = await fetchLeaderboard();
    return lb;
  }
}

export const UserService = new _UserService();