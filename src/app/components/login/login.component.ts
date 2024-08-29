import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import {AuthenticationRequestDto} from "../../dto/authenticationRequest.dto";
import {Subscription} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {User} from "../../model/user";
import {NavigationService} from "../../service/navigation.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  @Input() error: string | null | undefined;

  constructor(private router: Router, private authenticationService: AuthenticationService, private fb: FormBuilder, private navigationService: NavigationService) {
  }

  form: FormGroup = this.fb.group({ //*additional
    username: [''], //add Validator
    password: ['', [Validators.required, Validators.minLength(1)]],//add Validator
  });

  submit(): void { //*additional
    if (this.form.valid) {
      this.onLogin(this.form.value);
    }
  }

  ngOnInit(): void {
    // this.navigationService.previousUrl$.subscribe((previousUrl: string | null): void => {
    //   console.log("previousUrl ", previousUrl);
    //   // this.previousUrl = previousUrl;
    // })
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigateByUrl("/");
    } else {
      this.router.navigateByUrl("/login");
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe()); // to avoid having memory leaks
  }

  public onLogin(authenticationRequest: AuthenticationRequestDto): void {
    console.log("authReq : ", authenticationRequest);
    const observer = {
      next: (response: HttpResponse<User>): void => {
        const TOKEN: string | null = response.headers.get(environment.server.JWT_TOKEN);
        console.log("resp body ", response.body);
        if (TOKEN != null) {
          this.authenticationService.saveToken(TOKEN);
          if (response.body != null) {
            this.authenticationService.addUserToLocalCache(response.body);
            this.router.navigate([this.navigationService.getPreviousUrl()]);
          }
        }
      },
      error: (error: any):void => {
        console.error("An error occurred: ", error);
      },
      complete: ():void => {
        console.log("The observable has completed.");
      },
    };

    this.subscriptions.push(
      this.authenticationService.login(authenticationRequest).subscribe(observer)
    );
  }

}

// @TODO: create NotificationService
