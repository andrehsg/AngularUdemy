import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-praticavideo37',
  templateUrl: './praticavideo37.component.html',
  styleUrls: ['./praticavideo37.component.css'],
  styles: [`.stylish { color: white; } `]
})
export class Praticavideo37Component implements OnInit {

 logArray = [];
 secretVisible = true;
 constructor() { }

  ngOnInit() {
  }

    logExercise () {

    this.secretVisible = !this.secretVisible;
    this.logArray.push(new Date());
  }

}
