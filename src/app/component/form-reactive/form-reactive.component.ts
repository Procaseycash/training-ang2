import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseContent} from '../base.content';
import {deepCopy} from '../../utils';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent extends BaseContent implements OnInit {
  public userFg: FormGroup;
  public addressF: FormGroup;
  public sessionF: FormGroup;

  constructor(private fb: FormBuilder) {
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

  ngOnInit() {
  }

}
