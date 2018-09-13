import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter: number = 0;
  ref: any;
   @Output() gameStarted = new EventEmitter<{count: number}>();
   @Output() gameStopped = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  onStartGame () {

    this.ref = setInterval(() => {
      this.gameStarted.emit({count : this.counter++});
    }, 1000, this.gameStarted);


  }

  

  onStopGame () {

    this.counter = 0;
  	clearInterval(this.ref);
  	this.gameStopped.emit();
  }

}
