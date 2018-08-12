import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
