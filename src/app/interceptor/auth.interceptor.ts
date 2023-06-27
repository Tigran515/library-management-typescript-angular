import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../service/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {
  }

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    //if the current URL includes this login, we don't need to do anything with it, just return
    if (httpRequest.url.includes(`${this.authService.host}/auth/authenticate`)) {
      return httpHandler.handle(httpRequest);
    }
    // do the same for reset password, register

    this.authService.loadToken();
    const TOKEN = this.authService.getToken();
    const REQUEST = httpRequest.clone({setHeaders: { Authorization: `Bearer ${TOKEN}`}});

    return httpHandler.handle(REQUEST);
  }
}
