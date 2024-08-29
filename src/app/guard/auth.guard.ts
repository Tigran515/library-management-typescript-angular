import {ActivatedRouteSnapshot, createUrlTreeFromSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";
import {inject} from "@angular/core";

export const authGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);

  // If the user is not logged in, redirect them to the login page
  if (!authenticationService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }
  // The user is logged in, so allow the route to be activated
  return true;
};

//V2.
// export const authGuard = () => {
//   const authService = inject(AuthenticationService);
//   const router = inject(Router);
//
//   if (!authService.isLoggedIn()) {
//     router.navigate(['/login']).then(r => false);
//   }
//   return true;
//
// }
