import { UserProps } from './User';
export class Attributes<T> {
  constructor(private data: T) { }

  // K is one of the keys of T (name, age, id)
  get = <K extends keyof T>(key: K): T[K] => { //T[K] normal object lookup
    return this.data[key];
  }
  set(update: T): void {
    Object.assign(this.data, update);
    // overwrite all values in this.data
  }
  // Use type alias to represent () => {}
  getAll(): T {
    return this.data;
  }
}

const attrs = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: 'asdf'
});

const name = attrs.get('name');