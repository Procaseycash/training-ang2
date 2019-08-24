import {Address} from '../interfaces/address';
import {Session} from '../interfaces/session';

export class User {
  addresses?: Address[];
  firstName: string;
  lastName: string;
  middleName?: string;
  dob: string;
  sessions?: Session[];
}
