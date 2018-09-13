import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, content: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

    onAddServer() {
  
	  this.serverCreated.emit({
	  serverName: this.newServerName,
	  content: this.newServerContent});
  }

  onAddBlueprint() {
  
	  this.blueprintCreated.emit({
	  serverName: this.newServerName,
	  content: this.newServerContent});
  }

}
