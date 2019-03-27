import { Subject } from "../utils/Observable";

export class AuthService {
  static $auth = new Subject();

  static user = sessionStorage.getItem('wdh_js_user');

  static logout(history) {
    AuthService.user = null;
    sessionStorage.removeItem('wdh_js_user');
    AuthService.$auth.broadcast(AuthService.logged);
    return true;
  }

  static login() {
    AuthService.user = "admin";
    sessionStorage.setItem('wdh_js_user', 'admin');
    AuthService.$auth.broadcast(AuthService.logged);
    return true;
  }

  static get logged() {
    return !!AuthService.user;
  }
}