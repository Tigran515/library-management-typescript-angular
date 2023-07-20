// import {Injectable} from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {BookService} from "../service/book.service";
// import {AuthenticationService} from "../service/authentication.service";
//
// @Injectable()
// export class BookInterceptor implements HttpInterceptor {
//
//   constructor(private booksService: BookService, private authenticationService: AuthenticationService) {
//   }
//
//   intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
//     if (httpRequest.method === "GET" && httpRequest.url.includes(`${this.booksService.booksURL}`)) {
//       return httpHandler.handle(httpRequest);
//
//     }
//
//     this.authenticationService.loadToken();
//     const TOKEN = this.authenticationService.getToken();
//     const REQUEST = httpRequest.clone({setHeaders: {Authorization: `Bearer ${TOKEN}`}});
//
//     return httpHandler.handle(REQUEST);
//   }
// }
