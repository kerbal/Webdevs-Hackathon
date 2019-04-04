import { LocalStorageService } from "./LocalStorageService";

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

  register = (user) => {
    this.Users.push(user);
    LocalStorageService.WriteData('users', this.Users);
  }
}

export const UserService = new _UserService();