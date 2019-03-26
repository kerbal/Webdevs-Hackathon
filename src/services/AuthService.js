import { Subject } from "../utils/Observable";

export class AuthService {
  static $auth = new Subject();

  static username = null;

  static logout(history) {
    AuthService.username = null;
    AuthService.$auth.broadcast(AuthService.logged);
    return true;
  }

  static login() {
    AuthService.username = "admin";
    AuthService.$auth.broadcast(AuthService.logged);
    return true;
  }

  static get logged() {
    return !!AuthService.username;
  }
}