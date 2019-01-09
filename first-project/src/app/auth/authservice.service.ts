import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router: Router) { }

  token: string;


  signInUser (name: string, password: string) {


      firebase.auth().signInWithEmailAndPassword(name, password)
      .then (

      		response => {

	      		firebase.auth().currentUser.getIdToken()
	            .then (  
                     
	   				(token: string) => {
	   					this.token = token
	   					this.redirectHome()
	   				}
	   			)

   			}

      )
      .catch ( error => console.log(error) );

  }



  getToken () {

   firebase.auth().currentUser.getIdToken()
   .then (  

   		(token: string) => this.token = token
   );

   return this.token;

  }



  signUpUser (name: string, password: string) {

  	firebase.auth().createUserWithEmailAndPassword(name, password)
  	.catch (

  		(error: string) => console.log(error)
  	)
  	.then (

  		() => this.redirectHome()
  	);


  }

  logOut () {

  		firebase.auth().signOut();
  		this.token = null;

  }

  redirectHome () {

  		this.router.navigate(['/recipes']);
  }

  isLoggedIn () {

  		return this.token != null;
  }


}
