import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ActivatedRoute, NavigationEnd, Router, RouterLinkActive} from "@angular/router";
import {MatTabNavPanel} from "@angular/material/tabs";
import {filter} from "rxjs";

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.css']
})
export class NavTabComponent implements OnInit {
  public activeLink: string | undefined;
  public background: ThemePalette = undefined;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveTab();
      });
  }

  setActiveTab() {
    let currentPath = this.router.url.split("/");
    this.activeLink = currentPath[1];
  }

  ngOnInit() {
  }

}
