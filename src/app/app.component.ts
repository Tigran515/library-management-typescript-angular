import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs";
import {NavigationService} from "./service/navigation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title: string;

  constructor(private router: Router,public navigation:NavigationService) { //@TODO: injection can be removed
    this.title = 'Welcome to The Quiet Corner Library';
  }

  public ngOnInit():void {
    this.navigation.startSaveHistory();
  }
}
