import {Component} from '@angular/core';
import {SearchService} from "../../service/search.service";
import {SearchCriteriaDto} from "../../dto/search-criteria-dto";
import {BookAuthorDTO} from "../../dto/bookAuthor.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  advancedSearch: SearchCriteriaDto | undefined;
  results: BookAuthorDTO[] = [];
  isLoading: boolean = false;

  constructor(private searchService: SearchService, private router: Router) {
  }

  onSearch(searchTermEvent: string): void {
    this.searchTerm = searchTermEvent; //can be set directly
    const SEARCH_CRITERIA: SearchCriteriaDto = new SearchCriteriaDto();
    SEARCH_CRITERIA.setDetail = searchTermEvent;
    this.searchService.updateSearchTerm(searchTermEvent);//added
    // this.searchService.searchByTerm(SEARCH_CRITERIA).subscribe((response: BookAuthorDTO[]) => {
    //     this.results = response;
    //   }
    this.searchService.searchByTerm(SEARCH_CRITERIA).subscribe((response: BookAuthorDTO[]) => {
      this.searchService.updateSearchResults(response);
    }
  );
    // this.router.navigate(['/search']);
    this.router.navigate(['/search'], { queryParams: { term: searchTermEvent } });

  }

  onAdvancedSearch(searchCriteria: SearchCriteriaDto): void { // @TODO: update the method
    this.advancedSearch = searchCriteria;
    // this.searchService.advancedSearch(searchCriteria).subscribe((response: BookAuthorDTO[]): void => {
    //   this.results = response;
    // });
    // this.router.navigate(['/search'], { queryParams: { term: advancedCriteria.term } });
  }

//add fetchResults()
}
