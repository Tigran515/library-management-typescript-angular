import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {User} from "../model/user";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthenticationRequestDto} from "../dto/authenticationRequest.dto";
import {Router} from "@angular/router"; //using as Standalone

@Injectable({providedIn: 'root'})  // injected in the root

export class AuthenticationService {
  public host = environment.server.HOST; //changed to public for the Interceptor
  private token: string | null | undefined;  //@TODO: alternative Initialize the token property in the constructor. this.token = null;
  private loggedInUsername: string | null | undefined;
  private jwtHelper = new JwtHelperService(); //using as Standalone

  constructor(private http: HttpClient, private router: Router) {
  }

//@TODO: parameter should be AuthenticationRequestDto , P.S. the fields are defined private
  public login(authenticationRequest: AuthenticationRequestDto): Observable<HttpResponse<User>> { //return type can be changed to authenticationRequest
    return this.http.post<User>(`${this.host}/auth/authenticate`, authenticationRequest, {observe: 'response' }); // observe:`response` means return the whole http response body header also etc.
  }

  // public login(user: User): Observable<HttpResponse<any> | HttpErrorResponse>{ //old version for the demo case
  //   return this.http.post<HttpResponse<any> | HttpErrorResponse>
  //   (`${this.host}/auth/authenticate`, user, {observe:'response'})
  // }


  // public register(user: User): Observable<User> { // for the future
  //   return this.http.post<User | HttpErrorResponse>(`${this.host}/auth/register`,
  //     user);
  // }

  public logOut(): void {
    this.token = undefined;
    this.loggedInUsername = undefined;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }

  public saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token); //@TODO: rename token for security reason
  }

  public addUserToLocalCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user)); //localStorage only accepts String
  }

  public getUserFromLocalCache(): User | null {
    const USER = localStorage.getItem('user');

    if (USER) {
      return JSON.parse(USER); //parses the long string to an object
    } else {
      return null;
    }
  }

  // public getUserFromLocalCache(): User { // original version
  //   return JSON.parse(localStorage.getItem('user'));
  // }

  public isAdmin(): Observable<boolean> {
    const USER: User | null = this.getUserFromLocalCache();
    if (USER) {
      return of(USER && USER.role === 'admin');
    }
    return of(false);
  }

  public loginWithRedirect(): void {
    this.router.navigate(['/']);
  }

// public isAdmin(): Observable<boolean> {  //org bar
//   const USER = localStorage.getItem('user');
//   if (USER) {
//     const user = JSON.parse(USER);
//     return of(user && user.role === 'admin');
//   } else {
//     return of(false);
//   }
// }


  public loadToken(): void {
    this.token = localStorage.getItem('token'); //@TODO: rename 'token' to a more complex name for security reason
  }

  public getToken(): string | null {
    if (this.token != null) {
      return this.token; //@TODO: rename 'token' to a more complex name for security reason
    } else {
      return null;
    }
  }

  // public getToken(): string { // original version
  //   return this.token;
  // }

  public isLoggedIn(): boolean {
    this.loadToken();

    if (this.token != null && this.token !== '') { //@TODO: manage this nested statements
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) { //can be in the same line in previous statement
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
          return true;
        }
      }
    } else
    {
      this.logOut();
      return false;
    }
    return false; // added explicitly original
  }

}
