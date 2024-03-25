import {Component} from '@angular/core';
import {SearchService} from "../../service/search.service";
import {SearchCriteriaDto} from "../../dto/search-criteria-dto";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  advancedSearch: SearchCriteriaDto | undefined;
  //add property for advanced search
  results: any[] = []; //NOTE: this should be empty [] or undefined
  isLoading: boolean = false;

  constructor(private searchService: SearchService) {

  }

  onSearch(searchTermEvent: string): void {
    this.searchTerm = searchTermEvent; //can be set directly

    const SEARCH_CRITERIA: SearchCriteriaDto = new SearchCriteriaDto();
    SEARCH_CRITERIA.setDetail = searchTermEvent;

    this.searchService.findByTerm(SEARCH_CRITERIA).subscribe((response: any) => {
        console.log("response ", response);
      }
    )
    console.log("this.searchTermEvent ", this.searchTerm);
  }

  onAdvancedSearch(searchCriteria: SearchCriteriaDto): void {
    this.advancedSearch = searchCriteria;
    console.log("this.advancedSearch in SearchComponent ", this.advancedSearch);
  }

//add fetchResults()
}
