import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersServiceService } from '../service/users-service.service';
import { CounterServiceService } from '../service/counter-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
 users: string[];


constructor (private userService: UsersServiceService, private counterService: CounterServiceService) {


  }

  ngOnInit () {

  	this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    
    this.userService.onSetToInactive(id);
  }


}
