
import { Eventing } from "./Eventing";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
// const user = new User({ name: 'myname', age: 20 });
// user.set({ name: 'newname', age: 99999 })


// add User class into composition 
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(private data: UserProps) { }
  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
    // overwrite all values in this.data
  }
  // Use type alias to represent () => {}
}