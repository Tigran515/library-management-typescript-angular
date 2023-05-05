import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Author} from '../model/author';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthorService {

  private authorsUrl: string;

  constructor(private http: HttpClient) {
    this.authorsUrl=environment.server.URL+"/authors";
  }

  public findAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl);
  }

}

// public findAll(): Observable<Author[]> { // in case that findAll method will require Authorized
//   const token = localStorage.getItem('access_token');
//   console.log("TOKEN is "+ token);
//   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//   return this.http.get<Author[]>(this.authorsUrl, { headers });
// }
