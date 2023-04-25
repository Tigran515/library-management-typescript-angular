import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Author} from '../model/author';
import {Observable} from "rxjs";

@Injectable()
export class AuthorService {

  private authorsUrl: string;

  constructor(private http: HttpClient) {
    this.authorsUrl='http://localhost:8888/authors';
  }

  public findAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl);
  }
}
