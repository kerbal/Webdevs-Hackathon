import { LocalStorageService } from "./LocalStorageService";
import validate from 'validate.js';

class _UserService {
  constructor() {
    this.Users = LocalStorageService.ReadData('users');
    if(!this.Users) {
      this.GenUsers();
    }
  }

  GenUsers () {
    this.Users = [];
    this.Users.push(this.DefaultUserForm('admin', 'Admin', '123', true));
    for(let i = 0; i < 50; i++) {
      this.Users.push(this.DefaultUserForm(`user_${i}`, `Thí sinh ${i}`, '123'));
    }
    LocalStorageService.WriteData('users', this.Users);
  }
  

  FetchUser (username, password) {
    return this.Users.find(user => user.Username === username && user.Password === password);
  }

  EditUser (user) {
    this.Users = this.Users.map(us => {
      if(us.Username === user.Username) {
        return user;
      }
      else {
        return us;
      }
    });
    LocalStorageService.WriteData('users', this.Users);
  }

  DefaultUserForm (Username, Name, Password, IsAdmin = false) {
    return ({
      Username,
      Name,
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
    }
  }

  validate (account) {
    if(this.Users.find(user => user.Username === account.Username)) {
      return ['- Tên tài khoản đã có, hãy ghi danh bằng tên khác!'];
    }
    if(account.Password !== account.ConfirmPassword) {
      return ['- Xác nhận mật khẩu không khớp'];
    }
    return validate(account, this.constrains, {format: 'flat', fullMessages: false});
  }

  register (account) {
    const response = this.validate(account);
    if(response) {
      return response;
    }
    else {
      this.Users.push(this.DefaultUserForm(account.Username, `Thí sinh ${this.Users.length}`, account.Password, false));
      LocalStorageService.WriteData('users', this.Users);
    }
  }
}

export const UserService = new _UserService();