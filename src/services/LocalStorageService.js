export class LocalStorageService {
  static WriteData (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static ReadData (key) {
    return JSON.parse(localStorage.getItem(key));
  }
}