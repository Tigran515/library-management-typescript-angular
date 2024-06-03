import {Component, Input, OnInit} from '@angular/core';
import {BookAuthorDTO} from "../../dto/bookAuthor.dto";
import {SearchService} from "../../service/search.service";
import {ActivatedRoute} from "@angular/router";

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

  constructor(private searchService: SearchService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.searchTerm = params['term']; // is this used for Advanced search also?
    //   if (this.searchTerm) {
    //     console.log("searchTerm !!!")
    //     this.searchService.updateSearchTerm(this.searchTerm);
    //     this.searchService.searchByTerm({ setDetail: this.searchTerm } as any).subscribe(results => {
    //       this.searchService.updateSearchResults(results);
    //     });
    //   }
    // });

    this.searchService.currentDataSource.subscribe(results => this.searchResults = results);
    this.searchService.currentSearchTerm.subscribe(term => this.searchTerm = term);
  }

  // onSearch() {
  // }
}
