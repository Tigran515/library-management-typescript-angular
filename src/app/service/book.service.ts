import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Author} from '../model/author';
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {environment} from "../../environments/environment";

@Injectable()
export class BookService {

  private booksUrl: string;

  constructor(private http: HttpClient) {
    this.booksUrl = environment.server.URL+"/books";  //@TODO: check before making changes
  }

  public findAll(): Observable<Book[]> {
    console.log("MY request URL : "+this.booksUrl)
    return this.http.get<Book[]>(this.booksUrl);
  }
}
