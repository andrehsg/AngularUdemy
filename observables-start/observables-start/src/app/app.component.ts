import { Component, OnInit} from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

user1Activated = false;
user2Activated = false;
userActivated: boolean[] =  [];

subs: Subscription;
subs2: Subscription;

constructor (private usersService: UsersService) {
	
}

ngOnInit () {

	this.subs = this.usersService.usersActivated.subscribe(

    (id: number) => {


       if (id === 1)
          this.user1Activated = this.usersService.userActivated[id-1];
       else if (id === 2) 
       		this.user2Activated = this.usersService.userActivated[id-1];

    }


	 );

}


  ngOnDestroy () {
  	
    
  	this.subs.unsubscribe();
  }


	

}
