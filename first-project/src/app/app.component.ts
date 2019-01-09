import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  featureSelected = 'recipe';

  ngOnInit () {

  const config = {
    apiKey: "AIzaSyDWtfv4O4iA3A6DzVKOB2F4Pfb0wXRFAx8",
    authDomain: "recipe-book-cd7de.firebaseapp.com"
    };
    firebase.initializeApp(config);

  }

  onNavigate (feature: string) {

  console.log(feature+" emmited");
    this.featureSelected = feature;

  }
}
