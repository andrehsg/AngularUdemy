import { Component } from '@angular/core';

@Component ({
selector: 'app-server',
templateUrl: './server.component.html',	
styleUrls: ['./../app.component.css']
	
})

export class ServerComponent {
	
title = 'Server';
serverId: number = 13;
serverStatus: string = 'online';

getServerStatus () {
	
	this.serverStatus = Math.random() > 0.5? 'online': 'offline';
	return this.serverStatus;
}

	
	
}