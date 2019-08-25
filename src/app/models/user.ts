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
  [key: string]: any

  constructor(user: User) {
    this.sessions = user.sessions || [];
    this.id = user.id || null;
    this.addresses = user.addresses || [];
    this.dob = user.dob;
    this.role = user.role || UserEnum.GUEST;
    this.middleName = user.middleName || '';
    this.lastName = user.lastName;
    this.firstName = user.firstName;
  }
}
