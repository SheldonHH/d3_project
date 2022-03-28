import axios from 'axios';

axios.get('http://localhost:3000/users/1');


axios.post('http://localhost:3000/users', {
  name: 'myname',
  age: 20
});