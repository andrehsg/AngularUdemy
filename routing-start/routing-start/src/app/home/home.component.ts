import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  onLoadServers (id: number) {

  //complex calculation

   this.router.navigate(['/servers',id, 'edit'], {queryParams: {allowEdit: '1'}});


  }

  onLogin () {


    this.auth.logIn();


  }


  onLogout () {
  
    this.auth.logOut();
  
  }

}
