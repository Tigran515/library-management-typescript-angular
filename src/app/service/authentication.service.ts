import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {User} from "../model/user";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthenticationRequestDto} from "../dto/authenticationRequest.dto";
import {Router} from "@angular/router";
import {UserDto} from "../dto/UserDto"; //using as Standalone

@Injectable({providedIn: 'root'})  // injected in the root

export class AuthenticationService {
  public host: string = environment.server.HOST; //changed to public for the Interceptor
  private token: string | null | undefined;  //@TODO: alternative Initialize the token property in the constructor. this.token = null;
  private loggedInUsername: string | null | undefined;
  private jwtHelper: JwtHelperService = new JwtHelperService(); //using as Standalone

  constructor(private http: HttpClient, private router: Router) {
  }

//@TODO: parameter should be AuthenticationRequestDto , P.S. the fields are defined private
  public login(authenticationRequest: AuthenticationRequestDto): Observable<HttpResponse<User>> { //return type can be changed to authenticationRequest
    return this.http.post<User>(`${this.host}/auth/authenticate`, authenticationRequest, {observe: 'response'}); // observe:`response` means return the whole http response body header also etc.
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
    localStorage.removeItem(environment.authentication.USER);
    localStorage.removeItem(environment.authentication.TOKEN);
    localStorage.removeItem(environment.authentication.USERS);
  }

  public saveToken(token: string): void {
    this.token = token;
    localStorage.setItem(environment.authentication.TOKEN, token); //@TODO: rename token for security reason
  }

  public addUserToLocalCache(user: User): void {
    localStorage.setItem(environment.authentication.USER, JSON.stringify(user)); //localStorage only accepts String
  }

  public getUserFromLocalCache(): User | null {
    const USER: string | null = localStorage.getItem(environment.authentication.USER);

    if (USER) {
      return JSON.parse(USER); //parses the long string to an object
    } else {
      return null;
    }
  }

  public getUserInformation(): UserDto | null {  // @FIXME: also an modelToDtoConverter can be written
    if (!this.isLoggedIn()) {
      return null;
    }
    const USER: User | null = this.getUserFromLocalCache();
    if (USER) {
      return {
        username: USER.username,
        name: USER.name,
        lname: USER.lname,
        sname: USER.sname,
      };
    }
    return null;
  }

  public isTokenExpired(token: string | null): boolean {
    return this.jwtHelper.isTokenExpired(token);
  }

  public isAdmin(): Observable<boolean> {
    if (!this.isLoggedIn()) {
      return of(false);
    }
    const USER: User | null = this.getUserFromLocalCache();
    if (USER) {
      return of(USER && USER.role === environment.authentication.USER_ROLE.ADMIN);
    }
    return of(false);
  }

  public loginWithRedirect(): void {
    this.router.navigate(['/']);
  }

  public loadToken(): void {
    this.token = localStorage.getItem(environment.authentication.TOKEN); //@TODO: rename 'token' to a more complex name for security reason
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
