import { Subject } from "../utils/Observable";
import { history } from '..';
import { LocalStorageService } from "./LocalStorageService";

class AuthService {
  constructor () {
    this.$auth = new Subject();
    this.user = sessionStorage.getItem('wdh_js_user');
    this.Users = LocalStorageService.ReadData('users');
    if(this.Users === null) {
      this.GenUsers();
    }
  }

  register = (user) => {
    this.Users.push(user);
    LocalStorageService.WriteData('users', this.Users);
  }

  login = ({Username, Password}) => {
    const user = this.Users.find(user => user.Username === Username);
    if(!user) {
      return 'Tên đăng nhập sai!';
    }
    else {
      if(Password !== user.Password) {
        return 'Sai mật khẩu';
      }
    }
    this.user = Username;
    sessionStorage.setItem('wdh_js_user', Username);
    this.$auth.broadcast(AuthService.logged);
    history.push('/app');
  }

  logout() {
    this.user = null;
    sessionStorage.removeItem('wdh_js_user');
    this.$auth.broadcast(AuthService.logged);
    history.push('/');
  }

  // static login() {
  //   console.log('login');
  //   AuthService.user = "admin";
  //   sessionStorage.setItem('wdh_js_user', 'admin');
  //   AuthService.$auth.broadcast(AuthService.logged);
  //   history.push('/app');
  // }

  logged() {
    return !!this.user;
  }

  GetUser (username) {
    return this.Users.find(user => user.Username === username);
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

  DefaultUserForm (Username, Name, Password) {
    return ({
      Username,
      Name,
      Password,
      Exam: {
        ExamId: '',
        Answer: {},
        StartTime: 0,
        EndTime: 0,
        Score: -1
      }
    });
  }

  GenUsers () {
    this.Users = [];
    this.Users.push(this.DefaultUserForm('admin', 'Admin', '123'));
    for(let i = 0; i < 50; i++) {
      this.Users.push(this.DefaultUserForm(`user_${i}`, `Thí sinh ${i}`, '123'));
    }
    LocalStorageService.WriteData('users', this.Users);
  }
}

const AuthenticationService = new AuthService();
export default AuthenticationService;