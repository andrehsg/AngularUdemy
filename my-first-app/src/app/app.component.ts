import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userName = '';



onResetUserName(event: Event) {


this.userName = '';
}

onCheckUserInput(): boolean {
console.log();
if (this.userName === '')
	return true;
else return false;
}


}