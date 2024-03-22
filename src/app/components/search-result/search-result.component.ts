import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  @Input() searchTerm: string | undefined;
  //add property for advanced search
  @Input() results: any[] = [];

  constructor() {
  }

  // onSearch() {
  // }
}
