import { Subject } from "../utils/Observable";
import { history } from '..';
import { UserService } from "./UserService";

class _AuthService {
  constructor () {
    this.$auth = new Subject();
    let userJson = sessionStorage.getItem('wdh_js_user');
    if (!!userJson) {
      this.user = JSON.parse(userJson);
    }
  }

  login = (Username, Password) => {
    const user = UserService.FetchUser(Username, Password);
    if (!!user) {
      this.user = user;
      sessionStorage.setItem('wdh_js_user', JSON.stringify(user));
      this.$auth.broadcast(AuthService.logged);
      if (user.IsAdmin) {
        history.push('/admin');
      } else {
        history.push('/app');
      }
    }
  }

  logout() {
    this.user = null;
    sessionStorage.removeItem('wdh_js_user');
    this.$auth.broadcast(AuthService.logged);
    history.push('/');
  }

  logged() {
    return !!this.user;
  }
}

export const AuthService = new _AuthService();