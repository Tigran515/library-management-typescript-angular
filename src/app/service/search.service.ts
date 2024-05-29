import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ErrorHandlerService} from "./error-handler.service";
import {environment} from "../../environments/environment";
import {SearchCriteriaDto} from "../dto/search-criteria-dto";
import {catchError, Observable} from "rxjs";
import {addIfNotNull} from "../shared/utils/http-param-utils";
import {BookAuthorDTO} from "../dto/bookAuthor.dto";
import {Author} from "../model/author";

@Injectable()
export class SearchService {
  public searchURL: string;

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
    this.searchURL = environment.server.HOST + "/bookAuthor/search";

  };

  public searchByTerm(searchCriteria: SearchCriteriaDto): Observable<BookAuthorDTO[]> {
    const URL: string = `${this.searchURL}/${searchCriteria.getDetail}`;
    return this.http.get<BookAuthorDTO[]>(URL).pipe(
      catchError(this.errorHandlerService.handleError<BookAuthorDTO[]>(`findAuthor id=${searchCriteria.getDetail}`)));
  }

  public advancedSearch(searchCriteria: SearchCriteriaDto): Observable<BookAuthorDTO[]> { //FIXME: rename & change any to current obj type
    let params: HttpParams = new HttpParams();
    Object.keys(searchCriteria).forEach(key => {
      params = addIfNotNull(params, key.substring(1), (searchCriteria as any)[key]);
    })
    return this.http.get<BookAuthorDTO[]>(this.searchURL, {params: params}) // @FIXME: change any to current obj type
      .pipe(catchError(this.errorHandlerService.handleError<BookAuthorDTO[]>("find by term")))
  }

}


// public advancedSearch(searchCriteria: SearchCriteriaDto): Observable<any> { //FIXME: rename & change any to current obj type
//   let params: HttpParams = new HttpParams();
//   Object.keys(searchCriteria).forEach(key => {
//     params = addIfNotNull(params, key.substring(1), (searchCriteria as any)[key]);
//   })
//   return this.http.get<any>(this.searchURL, {params: params}) // @FIXME: change any to current obj type
//     .pipe(catchError(this.errorHandlerService.handleError<any>("find by term")))
// }
