import { Component } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;

  constructor(private authService: AuthService) {
    this.title = 'Welcome to The Quiet Corner Library';
  }

  loginWithRedirect() {
    this.authService.loginWithRedirect();

  }
}
