import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  searchTerm: string = "";

  constructor() {
  }

  onSearch(): void {
    console.log("invoked onSearch ", this.searchTerm)
    this.search.emit(this.searchTerm);
  }
}
