// type alias
type Callback = () => void


export class Eventing {
  events: { [key: string]: Callback[] } = {};
  on = (eventName: string, callback: Callback): void => {
    // this.events[eventName] // return either Callback[] or undefined
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName]; // can be either array or undefined
    if (!handlers || handlers.length == 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    })
  }
}