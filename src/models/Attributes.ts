export class Attributes {
  constructor(private data: T) { }
  get(propName: string): number | string | boolean {
    return this.data[propName];
  }
  set(update: T): void {
    Object.assign(this.data, update);
    // overwrite all values in this.data
  }
  // Use type alias to represent () => {}
}

const attrs = new Attributes<UserProps>({
  id: 5,
  name: 'asdf',
  age: 20
});


// don't use type assertion  // const id: number = attrs.get('id') as number;
const name = attrs.get('name');
