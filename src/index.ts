import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

// insert first function change
user.on('change', () => { });
user.on('change', () => { });

user.on('randomzie', () => { });
console.log(user);

console.log(user.get('name'));
console.log(user.get('age'));
// console.log("singapore")