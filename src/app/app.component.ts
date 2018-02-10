import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private authService: AuthService){}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBeW5YMKuyGPSZhF7sGftbc-xk90ZiOoa0",
    authDomain: "ng-recipe-book-f1cae.firebaseapp.com"

    });
    firebase.auth().onAuthStateChanged(authData => {
      if (authData) {
          console.log("user " + authData.uid + " is logged in with " + authData.providerData);
          this.authService.getToken();
      } else {
          console.log("user is logged out");
          this.authService.logout();
      }
  });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
