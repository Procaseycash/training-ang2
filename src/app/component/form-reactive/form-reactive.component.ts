import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseContent} from '../base.content';
import {User} from '../../models/user';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent extends BaseContent implements OnInit {
  public userFg: FormGroup;
  public addressF: FormGroup;
  public sessionF: FormGroup;
  public addC = false;

  constructor(private fb: FormBuilder, private readonly userService: ServiceService) {
    super();
    this.userFg = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern(/[a-zA-Z]+$/)])],
      middleName: ['', Validators.pattern(/[a-zA-Z]+$/)],
      addresses: [[], Validators.required],
      sessions: [[], Validators.required],
      role: ['', Validators.required],
      dob: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])]
    });
    this.sessionF = this.getGroup(fb);
    this.addressF = this.getGroup(fb);
  }

  addNewControl(names: string[]) {
    names.forEach(name => !this.userFg.contains(name)
      && this.userFg.addControl(name, new FormControl(Validators.compose([Validators.required]))));
    this.addC = true;
  }

  removeNewControl(names: string[]) {
    names.forEach(name => this.userFg.contains(name) && this.userFg.removeControl(name));
    this.addC = false;
  }

  getGroup(fb) {
    return fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addInfo(type) {
    const data = this.userFg.get(type);
    const fg = type === 'sessions' ? 'sessionF' : 'addressF';
    data.value.push(this[fg].value);
    data.setValue(data.value);
    this[fg].reset({title: '', description: ''});
    console.log({user: this.userFg.value});
  }

  save() {
    const user = this.userFg.value;
    console.log({user});
  }

  async ngOnInit() {
    const obj = await this.userService.getUsers();
    this.userFg.patchValue(new User(obj[3]));
  }

}
