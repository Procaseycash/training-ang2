import {Address} from '../interfaces/address';
import {Session} from '../interfaces/session';
import {UserEnum} from '../enums/user.enum';

export class User {
  addresses?: Address[];
  firstName: string;
  lastName: string;
  middleName?: string;
  role?: string;
  dob: string;
  id?: number;
  sessions?: Session[];
  [key: string]: any;

  constructor(user: User) {
    this.sessions = user.sessions ? user.sessions.map( session => new Session(session)) : [];
    this.id = user.id || null;
    this.addresses = user.addresses || [];
    this.dob = user.dob;
    this.role = user.role || UserEnum.GUEST;
    this.middleName = user.middleName || user.middle_name || '';
    this.lastName = user.lastName ||  user.last_name;
    this.firstName = user.firstName ||  user.first_name;
  }
}
