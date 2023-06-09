import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Author} from '../model/author';
import {catchError, Observable, Subject, tap} from "rxjs";
import {environment} from "../../environments/environment";
import {ErrorHandlerService} from "./error-handler.service";

@Injectable()
export class AuthorService {
  private authorsUrl: string;

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
    this.authorsUrl = environment.server.URL + "/authors"; //@TODO: move the path's to the env ?
  };

  public findAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl);
  };

  public findById(id: number): Observable<Author> {
    const URL = `${this.authorsUrl}/author/${id}`;

    return this.http.get<Author>(URL).pipe(
      catchError(this.errorHandlerService.handleError<Author>(`findAuthor id=${id}`)));
  }


  public addAuthor(author: Author): Observable<Author> {  // The method returns an Observable that will emit an Author object.
    return this.http.post<Author>(this.authorsUrl + "/post", author)
      .pipe(catchError(this.errorHandlerService.handleError<Author>('addAuthor', author)))
  };

  public updateAuthorFields(id: number, author: Author) {
    const URL = `${this.authorsUrl}/update/${id}`;

    return this.http.patch(URL, author).pipe(
      catchError(this.errorHandlerService.handleError('patchAuthor'))
    );
  };

  public deleteAuthor(id: number): Observable<unknown> {
    const URL = `${this.authorsUrl}/delete/${id}`; //@TODO: remove string
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
