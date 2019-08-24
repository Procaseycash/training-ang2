import {Injectable} from '@angular/core';
// @ts-ignore
import * as db from '../db.json';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() {
  }

  async getUsers(): Promise<User[]> {
    return await  db.users;
  }

}
