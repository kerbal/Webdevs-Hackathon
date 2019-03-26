export class Subject {
  __observes = [];
  
  subscribe(observe) {
    this.__observes.push(observe);
  }

  broadcast() {
    for(let observe of this.__observes) {
      observe(arguments);
    }
  }
}