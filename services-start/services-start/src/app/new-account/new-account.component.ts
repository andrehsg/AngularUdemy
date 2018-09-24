import { Component} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {


  constructor (private loggingService: LoggingService, private accService: AccountService) {
       this.accService.statusUpdated.subscribe(
       (status: string) => alert('statusChangedTest: ' + status)
       );
   }

  onCreateAccount(accountName: string, accountStatus: string) {

    
    this.accService.addAccount(accountName, accountStatus);
  }
}
