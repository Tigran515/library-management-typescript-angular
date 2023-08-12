import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../service/authentication.service";
import {AuthorService} from "../service/author.service";
import {BookService} from "../service/book.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService, private authorService: AuthorService, private booksService: BookService, private router: Router) {
  }

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    //if the current URL includes this login, we don't need to do anything with it, just return
    if (httpRequest.url.includes(`${this.authenticationService.host}/auth/authenticate`)) {
      console.log("httpRequest is", httpRequest);
      return httpHandler.handle(httpRequest);
    }
    // do the same for reset password, register

    if (httpRequest.method === "GET" && httpRequest.url.includes(`${this.authorService.authorsURL}`)) {  //@TODO: write more strict
      return httpHandler.handle(httpRequest);
    }

    if (httpRequest.method === "GET" && httpRequest.url.includes(`${this.booksService.booksURL}`)) {
      return httpHandler.handle(httpRequest);
    }

    this.authenticationService.loadToken();
    const TOKEN = this.authenticationService.getToken();
    if (this.authenticationService.isTokenExpired(TOKEN)) {
      this.router.navigate(['/']);
    }
    const REQUEST = httpRequest.clone({setHeaders: {Authorization: `Bearer ${TOKEN}`}}); //change to HeaderType.Authorization
    console.log("request +token", REQUEST);
    return httpHandler.handle(REQUEST);
  }
}
