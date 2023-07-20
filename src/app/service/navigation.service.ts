import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, filter, Observable, pairwise, Subject} from "rxjs";
import {NavigationEnd, Router, RoutesRecognized} from "@angular/router";

@Injectable({providedIn: 'root'})
export class NavigationService implements OnInit {
  // private previousUrl: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);  // private previousUrl: Subject<string> = new Subject<string>();
  // // isPreviousUrl: Observable<string | null> = this.previousUrl.asObservable();
  // public previousUrl$: Observable<string|null> = this.previousUrl.asObservable();
  //
  // constructor() {}
  //
  // setPreviousUrl(previousUrl: string) {
  //   this.previousUrl.next(previousUrl);
  // }
  public previousUrl: string | undefined;
  public currentUrl: string | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public startSaveHistory():void{
    // V1
    // this.router.events.subscribe((event: any) => {
    //   if (event instanceof NavigationEnd) {
    //     this.previousUrl = this.currentUrl;
    //     this.currentUrl = event.url;
    //     console.log("pre ", this.previousUrl, this.currentUrl);
    //   }
    // });

    this.router.events
      .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {
        this.previousUrl = events[0].urlAfterRedirects;
        console.log('previous url', this.previousUrl);
      });
  }

  public getCurrentUrl(): string {
    if (this.currentUrl != null) {
      return this.currentUrl;
    }
    return "";
  }

  public getPreviousUrl(): string {
    if (this.previousUrl != null) {
      return this.previousUrl;
    }
    return "";
  }
}
