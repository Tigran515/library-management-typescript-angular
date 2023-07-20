// import {Injectable} from '@angular/core';
// import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
// import {AuthenticationService} from "../service/authentication.service";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationGuard implements CanActivate {
//
//   constructor(private authenticationService: AuthenticationService, private router: Router) {
//   }
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     return this.isUserLoggedIn();
//   }
//
//   private isUserLoggedIn(): boolean{
//     if(this.authenticationService.isLoggedIn()){
//       return true;
//     }
//     this.router.navigate(['/authors']); //@TODO: change to /login
//     return false;
//   }
//
// }
