import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.css']
})
export class ViewUserDetailsComponent implements OnInit {
  @Input() public user: User = null;
  @Output() emitter = new EventEmitter();

  constructor() {
  }

  onClose() {
    this.emitter.emit(null);
  }

  ngOnInit() {
  }

}
