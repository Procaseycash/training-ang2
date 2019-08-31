import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  public user: User = {
    firstName: '',
    lastName: '',
    middleName: '',
    sessions: [],
    addresses: [],
    role: '',
    dob: '',
    address: {title: '', description: ''},
    session: {title: '', description: ''},
  };
  userN: User = {
    firstName: '',
    lastName: '',
    middleName: '',
    sessions: [],
    addresses: [],
    role: '',
    dob: '',
    address: {title: '', description: ''},
    session: {title: '', description: ''},
  };

  constructor() {
  }

  submitModelForm() {
    const user = new User(this.user);
    console.log({user});
  }

  addAddress(address, type?) {
    if (type) {
      this.userN.addresses.push(address);
      this.userN.address = {title: '', description: ''};
      console.log({userN: this.userN});
      return;
    }
    this.user.addresses.push(address);
    this.user.address = {title: '', description: ''};
    console.log({user: this.user});
  }

  addSession(session, type?) {
    if (type) {
      this.userN.sessions.push(session);
      this.userN.session = {title: '', description: ''};
      console.log({userN: this.userN});
      return;
    }
    this.user.sessions.push(session);
    this.user.session = {title: '', description: ''};
    console.log({user: this.user});
  }

  submitNativeForm(user) {
    const userN = new User({...this.userN, ...user});
    console.log({userN});
  }

  ngOnInit() {
  }

}
