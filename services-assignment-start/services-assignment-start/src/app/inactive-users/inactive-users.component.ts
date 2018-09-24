import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersServiceService } from '../service/users-service.service';
import { CounterServiceService } from '../service/counter-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];


  constructor (private userService: UsersServiceService, private counterService: CounterServiceService) {


  }


  ngOnInit () {

  	this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    
    this.userService.onSetToActive(id);
  }
}
