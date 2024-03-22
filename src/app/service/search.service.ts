import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorHandlerService} from "./error-handler.service";
import {environment} from "../../environments/environment";
import {SearchCriteriaDto} from "../dto/search-criteria-dto";
import {catchError} from "rxjs";

@Injectable()
export class SearchService {
  public searchURL: string;

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
    this.searchURL = environment.server.HOST + "/bookAuthor/search"
  };

  public findByTerm(searchCriteria: SearchCriteriaDto) {
    return this.http.post<any>(this.searchURL, searchCriteria)
      .pipe(catchError(this.errorHandlerService.handleError<any>("find by term", searchCriteria)))
  }

}
