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
  //add property for advanced search
  results: any[] = []; //NOTE: this should be empty [] or undefined
  isLoading: boolean = false;

  constructor(private searchService: SearchService) {

  }

  onSearch(searchTermEvent: string): void {
    this.searchTerm = searchTermEvent; //can be set directly

    const searchCriteria: SearchCriteriaDto = new SearchCriteriaDto();
    searchCriteria.setDetail = searchTermEvent;

    this.searchService.findByTerm(searchCriteria).subscribe((response: any) => {
        console.log("response ", response);
      }
    )
    console.log("this.searchTermEvent ", this.searchTerm);
  }

//add onAdvancedSearch()

//add fetchResults()
}
