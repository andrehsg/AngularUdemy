import { Component } from '@angular/core';

@Component ({
selector: 'app-server',
templateUrl: './server.component.html',	
styleUrls: ['./../app.component.css'],
styles: [`.online { color: white; }
`]
})

export class ServerComponent {
	
title = 'Server';
serverId: number = 13;
serverStatus: string = 'offline';

constructor () {
	
	this.serverStatus = Math.random() > 0.5? 'online': 'offline';
	console.log();
}

getServerStatus () {
	
	
	return this.serverStatus;
}

getColor (): string {
	
	return this.serverStatus === 'online'? 'green': 'red';
}

	
	
}