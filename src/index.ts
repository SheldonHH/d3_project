import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

// insert first function change
user.on('change', () => {
  console.log('Change #1');
});

user.on('change', () => {
  console.log('Change #2');
});

user.on('save', () => {
  console.log('Save was triggered');
});

user.trigger('change');
user.trigger('save');

console.log(user);

console.log(user.get('name'));
console.log(user.get('age'));
// console.log("singapore")