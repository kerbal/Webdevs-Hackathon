import { Subject } from "../utils/Observable";
import { history } from '..';

export class AuthService {
  static $auth = new Subject();

  static user = sessionStorage.getItem('wdh_js_user');

  static logout() {
    console.log('logout');
    AuthService.user = null;
    sessionStorage.removeItem('wdh_js_user');
    AuthService.$auth.broadcast(AuthService.logged);
    history.push('/');
  }

  static login() {
    console.log('login')
    AuthService.user = "admin";
    sessionStorage.setItem('wdh_js_user', 'admin');
    AuthService.$auth.broadcast(AuthService.logged);
    history.push('/app');
  }

  static get logged() {
    return !!AuthService.user;
  }
}