import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Author} from '../model/author';
import {Observable} from "rxjs";
import {Book} from "../model/book";

@Injectable()
export class BookService {

  private booksUrl: string;

  constructor(private http: HttpClient) {
    this.booksUrl = 'http://localhost:8888/books';
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }
}
