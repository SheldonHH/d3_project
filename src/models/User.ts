interface UserProps {
  name?: string;
  age?: number;
}
// const user = new User({ name: 'myname', age: 20 });
// user.set({ name: 'newname', age: 99999 })

type Callback = () => void
// no types and no return value

export class User {
  constructor(private data: UserProps) { }

  get(propName: string): number | string {
    return this.data[propName];
  }

  // set(update: UserProps): void {
  //   Object.assign(this.data, update);
  //   // overwrite all values in this.data
  // }
  // Use type alias to represent () => {}
  on(eventName: string, callback: Callback): void {
    // this.events[eventName] // return either Callback[] or undefined
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    console hanlders = this.events[eventName]; // can be either array or undefined
    if (!handlers || handlers.length == 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    })
  }

}