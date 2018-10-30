import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval} from 'rxjs';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

numberSubs: Subscription;
customSubs: Subscription;


  constructor() { }

  ngOnInit() {

  	 const myNumbers = interval(1000);

     this.numberSubs = myNumbers.subscribe (

       (number: number) => {

         console.log(number);
       }

      );

     }

     ngOnDestroy() {

     this.numberSubs.unsubscribe();

     	
     }


  

}
