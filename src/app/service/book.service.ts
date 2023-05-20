import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Author} from '../model/author';
import {catchError, Observable} from "rxjs";
import {Book} from "../model/book";
import {environment} from "../../environments/environment";
import {ErrorHandlerService} from "./error-handler.service";

@Injectable()
export class BookService {

  private booksUrl: string;

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
    this.booksUrl = environment.server.URL + "/books";
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  };

  public addBook(book: Book, authorId: number): Observable<Book> {
    const requestBody = {
      bookDTO: book,
      authorId: authorId
    };
    return this.http.post<Book>(this.booksUrl + "/post", requestBody)
      .pipe(catchError(this.errorHandlerService.handleError<Book>('addBook', book)));
  };

  public deleteBook(id: number): Observable<unknown> {
    const url = `${this.booksUrl}/delete/${id}`;
    console.log("deleteBook ID: " + id + " url " + url);
    return this.http.delete(url).pipe(
      catchError(this.errorHandlerService.handleError('deleteBookAndAuthor'))
    );
  };

}
