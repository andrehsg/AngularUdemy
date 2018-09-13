import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name:'testServer', content:'just a test'}];
  count: number = 0;
  numberList: number[] = [];


  onServerAdded(serverData: {serverName: string, content: string}) {
     this.serverElements.push({
     type: 'server',
      name: serverData.serverName,
     content: serverData.content
    });
  }

  onBlueprintAdded(serverData: {serverName: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.content
    });
  }

  onGameStarted(count: any) {

  console.log(count);
  this.count = count.count;

  if (true) {
  
      this.numberList.push(count);
      console.log("teste");

      }
  

  }

  onGameStopped() {

    this.count = 0;
    this.numberList = [];
  }



}
