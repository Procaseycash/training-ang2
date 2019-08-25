import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {ServiceService} from '../service/service.service';
import {UserEnum} from '../enums/user.enum';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  public users: User[] = [];
  public user: User = null;
  public types = UserEnum;
  public type: UserEnum = UserEnum.GUEST;

  constructor(private readonly serviceService: ServiceService) {
  }

  async getUsers() {
    this.serviceService.getUsers().then(res => this.users = res, err => console.log(err));
  }

  feedback(res) {
    this.user = res;
  }

  viewDetail(user) {
    this.user = user;
  }

  async ngOnInit() {
    this.getUsers();
  }

}
