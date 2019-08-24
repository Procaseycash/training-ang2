import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  public users: User[] = [];

  constructor(private readonly serviceService: ServiceService) {
  }

  async getUsers() {
  this.serviceService.getUsers().then(res => this.users = res, err => console.log(err));
  }

  async ngOnInit() {
    this.getUsers();
  }

}
