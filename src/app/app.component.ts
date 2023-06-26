import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;

  constructor() { //@TODO: injection can be removed
    this.title = 'Welcome to The Quiet Corner Library';
  }

}
