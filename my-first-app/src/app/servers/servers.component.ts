import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverStatus = 'No created';
  allowNewServer = true;
  serverName = 'testServer';
  serverCreated = false;
  
  constructor() { 

  setTimeout (() => {

  var random = Math.floor(Math.random() * 6) + 1;

  this.allowNewServer = false;
  

  }, 8000);


  
 

  }

  onCreateServer () {

  this.serverCreated = true;
  this.serverStatus = 'Created server named ' + this.serverName;


  }

  onUpdateServerName (event: Event) {


  this.serverName = (<HTMLInputElement>event.target).value;



  }

  ngOnInit() {
  }

}
