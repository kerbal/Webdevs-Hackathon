export class Subject {
  __observes = [];
  
  subscribe(observe) {
    this.__observes.push(observe);
    // Unsubscribe func
    return () => {
      this.__observes = this.__observes.filter(o => o !== observe);
    }
  }

  broadcast() {
    for(let observe of this.__observes) {
      observe(arguments);
    }
  }
}