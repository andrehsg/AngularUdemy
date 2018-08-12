import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

title = 'app';
userName = '';



onResetUserName(event: Event) {


this.userName = '';
}

onCheckIsEmpty(): boolean {
console.log();

if (this.userName === '')
	return true;
else return false;
}

  

  ngOnInit() {
  }

}
