import {Component, Input, OnInit} from '@angular/core';
import {BookAuthorDTO} from "../../dto/bookAuthor.dto";
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  // @Input() searchTerm: string | undefined;
  //add property for advanced search to display the search keywords/criteria in the UI
  // @Input() results: BookAuthorDTO[] = [];
  searchResults: BookAuthorDTO[] | undefined;
  searchTerm: string | undefined;

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.searchService.currentDataSource.subscribe(results => this.searchResults = results);
    this.searchService.currentSearchTerm.subscribe(term => this.searchTerm = term);
  }

  // onSearch() {
  // }
}
