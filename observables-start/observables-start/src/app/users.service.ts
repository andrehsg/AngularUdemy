import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

userActivated: boolean[] = [];


usersActivated = new Subject();

  constructor() { }
}