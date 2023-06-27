import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {JwtHelperService} from "@auth0/angular-jwt"; //using as Standalone

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthenticationService {
  public host = environment.server.URL; //changed to public for the Interceptor
  private token: string | null | undefined;  //@TODO: alternative Initialize the token property in the constructor. this.token = null;
  private loggedInUsername: string | null | undefined;
  private jwtHelper = new JwtHelperService(); //using as Standalone

  constructor(private http: HttpClient) {
  }

//@TODO: server returns object with jwt
  public login(user: User): Observable<Object | HttpErrorResponse> {
    return this.http.post<Object | HttpErrorResponse>(`${this.host}/auth/authenticate`,
      user, {observe: `response`}); // observe:`response` means return the whole http response body header and etc.
  }

  // public login(user: User): Observable<HttpResponse<any> | HttpErrorResponse>{ //original version for the demo case
  //   return this.host.post<HttpResponse<any> | HttpErrorResponse>
  //   (`${this.host}/auth/authenticate`, user, {observe:`response`})
  // }


  // public register(user: User): Observable<User | HttpErrorResponse> { // for the future
  //   return this.http.post<User | HttpErrorResponse>(`${this.host}/auth/register`,
  //     user);
  // }

  public logOut(): void {
    this.token = null;
    this.loggedInUsername = null;
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
    } else {
      this.logOut();
      return false;
    }
    return false; // added explicitly original
  }

}
