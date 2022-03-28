// import axios from 'axios';
import { User } from './models/User';


// const user = new User({ id: 1 });
const user = new User({ name: 'new record', age: 20 });
user.save();

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