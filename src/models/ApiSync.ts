import axios, { AxiosResponse, AxiosPromise } from "axios";
import { UserProps } from './User'

export class Sync {
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const id = this.get('id');
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post(this.rootUrl, data);
      // axios.post('http://localhost:3000/users', this.data)
    }
  }
}