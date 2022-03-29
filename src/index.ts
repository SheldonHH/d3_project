// import axios from 'axios';
import { User } from './models/User';
// const user = new User({ id: 1 });
// User.buildUser instead //const user = new User({ id: 2, name: 'new record', age: 20 }); 
const user = User.buildUser({ id: 1 });

user.on('change', () => {
  console.log(user);
});
user.fetch();

user.isAdminUser()

// user.save();



// user.on('change', () => {
//   console.log('User was changed');
// });

// user.trigger('change')


// user.on('change', () => {
//   console.log('User was changed, we probably need to update some HTML')
// });

// user.set({ name: 'New Name' });

// reminder on accessors
// class Person {
//   constructor(public firstName: string, public lastName: string) { }
//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const person = new Person('firstname', 'lastname');
// console.log(person.fullName);



// user.fetch();

// setTimeout(() => {
//   console.log(user);
// }, 4000)
// after fetch() you should be able to see our given properties


// axios.get('http://localhost:3000/users/1');


// axios.post('http://localhost:3000/users', {
//   name: 'myname',
//   age: 20
// });