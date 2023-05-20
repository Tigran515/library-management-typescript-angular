import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Author} from '../model/author';
import {catchError, Observable, Subject} from "rxjs";
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

  public addAuthor(author: Author): Observable<Author> {  // The method returns an Observable that will emit an Author object.
    return this.http.post<Author>(this.authorsUrl + "/post", author)
      .pipe(catchError(this.errorHandlerService.handleError<Author>('addAuthor', author)))
  };

  public deleteAuthor(id: number): Observable<unknown> {
    const url = `${this.authorsUrl}/delete/${id}`;
    console.log("deleteAuthor ID: " + id + " url " + url);
    return this.http.delete(url).pipe(
      catchError(this.errorHandlerService.handleError('deleteAuthor'))
    );
  }

}

// public findAll(): Observable<Author[]> { // in case that findAll method will require Authorized
//   const token = localStorage.getItem('access_token');
//   console.log("TOKEN is "+ token);
//   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//   return this.http.get<Author[]>(this.authorsUrl, { headers });
// }
