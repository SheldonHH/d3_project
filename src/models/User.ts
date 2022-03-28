interface UserProps {
  name?: string;
  age?: number;
}
// const user = new User({ name: 'myname', age: 20 });
// user.set({ name: 'newname', age: 99999 })

export class User {
  constructor(private data: UserProps) { }

  get(propName: string): number | string {
    return this.data[propName];
  }

  // set(update: UserProps): void {
  //   Object.assign(this.data, update);
  //   // overwrite all values in this.data
  // }
}