import { AxiosResponse } from 'axios';
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";

export interface UserProps {
  id?: number;
  age?: number;
  name?: string;
}
// const user = new User({ name: 'myname', age: 20 });
// user.set({ name: 'newname', age: 99999 })
const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps>{
  static buildUser(attrs: UserProp): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
  static isAdminUser(): boolean {
    return this.get('id') === 1
  }


// const user = User.buildUser({})
// user.get('id');
// user.get('name');
// user.get('age');
// user.sync();
// user.fetch();



// add User class into composition
// export class User {
//   public events: Eventing = new Eventing();
//   public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
//   public attributes: Attributes<UserProps>;

//   constructor(attrs: UserProps) {
//     this.attributes = new Attributes<UserProps>(attrs);
//   }

//   get on() {
//     return this.events.on;
//   }

//   get trigger() {
//     return this.events.trigger;
//   }

//   get get() {
//     return this.attributes.get;
//   }

//   set(update: UserProps): void {
//     this.attributes.set(update);
//     this.events.trigger('change');
//   }

//   fetch(): void {
//     const id = this.attributes.get('id');
//     if (typeof id !== 'number') {
//       throw new Error('')
//     }

//     this.sync.fetch(id).then((response: AxiosResponse): void => {
//       this.set(response.data); //1. update attributes, 2. trigger events
//     });
//   }

//   save(): void {
//     this.sync.save(this.attributes.getAll())
//       .then((response: AxiosResponse): void => {
//         this.trigger('save');
//       })
//       .catch(() => {
//         this.trigger('error');
//       });
//   }
// }
//   // on(eventName: string, callback: Callback): void {
//   //   this.events.on(eventName, callback);
//   // }

//   // Put get and set in Attributes.ts
//   // constructor(private data: UserProps) { }
//   // get(propName: string): number | string {
//   //   return this.data[propName];
//   // }
//   // set(update: UserProps): void {
//   //   Object.assign(this.data, update);
//   //   // overwrite all values in this.data
//   // }
//   // Use type alias to represent () => {}
// }