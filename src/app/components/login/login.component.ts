import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import {AuthenticationRequestDto} from "../../dto/authenticationRequest.dto";
import {Subscription} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {User} from "../../model/user";
import {NavigationService} from "../../service/navigation.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public previousUrl: string = "";
  @Input() error: string | null | undefined;

  constructor(private router: Router, private authenticationService: AuthenticationService, private fb: FormBuilder, private navigationService: NavigationService) {
  }

  form: FormGroup = this.fb.group({ //*additional
    username: [''], //add Validator
    password: ['', [Validators.required, Validators.minLength(1)]],//add Validator
  });

  submit() { //*additional
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

//change to authReq
  //V1
//   public onLogin(user: User): void {  // code :( + change to private + add errorResponse
//     console.log("authReq : ", user);
//     this.subscriptions.push(
//       this.authenticationService.login(user).subscribe(
//         (response: HttpResponse<User>) => {
//           console.log("RESPONSE ", response);
//           const TOKEN: string | null = response.headers.get(HeaderType.JWT_TOKEN);
//
//           console.log("header ", response.headers);
//           console.log("TOKEN ", TOKEN);
//           console.log("resp body ", response.body);
//           //bad code
//           if (TOKEN != null) {
//             this.authenticationService.saveToken(TOKEN);
//             //bad code
//             if (response.body != null) {
//               this.authenticationService.addUserToLocalCache(response.body);
//               console.log("ALL CLEAR ")
//               this.router.navigate(['/']);
//             }
//           }
//           // add else condition
//         },
//         (err: HttpErrorResponse) => {
//           console.log("error ", err);
//         }
//       )
//     );
//   }

  //V2
  public onLogin(authenticationRequest: AuthenticationRequestDto): void {
    console.log("authReq : ", authenticationRequest);
    const observer = {
      next: (response: HttpResponse<User>) => {
        const TOKEN: string | null = response.headers.get('JWT-Token');

        console.log("resp body ", response.body);

        if (TOKEN != null) {
          this.authenticationService.saveToken(TOKEN);
          if (response.body != null) {
            this.authenticationService.addUserToLocalCache(response.body);
            console.log("ALL CLEAR ");
            // this.router.navigate(['/']); //@TODO: redirect to the previous window
            console.log("NAV", this.navigationService.getPreviousUrl());
            this.router.navigate([this.navigationService.getPreviousUrl()]);
          }
        }
      },
      error: (error: any) => {
        console.error("An error occurred: ", error);
      },
      complete: () => {
        console.log("The observable has completed.");
      },
    };

    this.subscriptions.push(
      this.authenticationService.login(authenticationRequest).subscribe(observer)
    );
  }

}

// @TODO: create NotificationService
