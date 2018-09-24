import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  statusChanged: number = 0;
  constructor() { 

  }

  incrementCounter () {

	this.statusChanged++;

  }
}
