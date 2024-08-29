import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = environment.server.HOST;

  constructor(private http: HttpClient) {
  }

  //create methods for the future integration

  // public getUsers(): Observable<User[] | HttpErrorResponse>{
  //   return this.http.get<User[]>(`${this.host}`)
  // }

  // public addUser()
  //public updateUser()
  //public deactivateUser()

  // public addUsersToLocalCache(user: User[]): void{
// }
  // public getUsersFromLocalCache(user: User[]): void{

}
