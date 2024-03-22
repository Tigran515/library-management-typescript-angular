import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Author} from '../model/author';
import {catchError, Observable, Subject, tap} from "rxjs";
import {environment} from "../../environments/environment";
import {ErrorHandlerService} from "./error-handler.service";

@Injectable()
export class AuthorService {
  public authorsURL: string;

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
    this.authorsURL = environment.server.HOST + "/authors"; //@TODO: this is not host only
  };

  public findAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsURL);
  };

  public findById(id: number): Observable<Author> {
    const URL = `${this.authorsURL}/author/${id}`; //@TODO memory waste!

    return this.http.get<Author>(URL).pipe(
      catchError(this.errorHandlerService.handleError<Author>(`findAuthor id=${id}`)));
  }


  public addAuthor(author: Author): Observable<Author> {  // The method returns an Observable that will emit an Author object.
    return this.http.post<Author>(this.authorsURL + "/post", author)
      .pipe(catchError(this.errorHandlerService.handleError<Author>('addAuthor', author)))
  };

  // public updateAuthorFields(id: number, author: Author) { //@TODO: update new implementations
  //   const URL = `${this.authorsURL}/update/${id}`;
  //   console.log("Author details:",author);
  //   return this.http.put(URL, author).pipe(
  //     catchError(this.errorHandlerService.handleError('updateAuthor'))
  //   );
  // };
  public updateAuthorFields(author: Author) { //@TODO: update new implementations
    const URL: string = `${this.authorsURL}/update`;

    return this.http.put(URL, author).pipe(
      catchError(this.errorHandlerService.handleError('updateAuthor'))
    );
  };

  public deleteAuthor(id: number): Observable<unknown> {
    const URL = `${this.authorsURL}/delete/${id}`; //@TODO: remove string
    console.log("deleteAuthor ID: " + id + " url " + URL);
    return this.http.delete(URL).pipe(
      catchError(this.errorHandlerService.handleError('deleteAuthor'))
    );
  };

}

// public findAll(): Observable<Author[]> { // in case that findAll method will require Authorized
//   const token = localStorage.getItem('access_token');
//   console.log("TOKEN is "+ token);
//   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//   return this.http.get<Author[]>(this.authorsUrl, { headers });
// }
