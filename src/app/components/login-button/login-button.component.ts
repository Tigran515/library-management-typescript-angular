import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {asyncScheduler} from "rxjs";
import {Router} from "@angular/router";
// import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  constructor(public auth: AuthenticationService, public router: Router) {
  }

  ngOnInit(): void {
  }

  routeToLogin():void{
    this.router.navigate(["/login"]);
}
  protected readonly async = asyncScheduler;
}
