import { Component, OnInit } from '@angular/core';
import { interval} from 'rxjs';
import { Observer } from 'rxjs/Observer';
import { Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

 // const myNumbers = interval(1000);

     // myNumbers.subscribe (

     //   (number: number) => {

         //  console.log(number);
      //  }

     // );



      const myObservable = Observable.create((observer: Observer<string> ) => {

      	setTimeout(() => {

		    observer.next('first');
		}, 2000);

		 setTimeout(() => {

		    observer.next('second');
		}, 4000);

		setTimeout(() => {

		    observer.error('error');
		}, 6000);

      	});

      	myObservable.subscribe (

      	(data: string) => { console.log(data); },
      	(error: string) => { console.log(error); },
      	( ) => { console.log('completed'); }



      	);




     }


  

}
