import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SearchCriteriaDto} from "../../dto/search-criteria-dto";

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  @Output() advancedFilterEvent: EventEmitter<any> = new EventEmitter<any>();
  // searchForm: FormGroup | undefined;
  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { //also add MatDialogRef<AdvancedSearchComponent>
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      authorName: [null],
      authorLname: [null],
      authorSname: [null],
      bookTitle: [null],
      isbn: [null],
    })
  }

  onSearch(): void {
    const ADVANCED_SEARCH: SearchCriteriaDto = new SearchCriteriaDto(
      this.searchForm.value.authorName,
      this.searchForm.value.authorLname,
      this.searchForm.value.authorSname,
      this.searchForm.value.bookTitle,
      this.searchForm.value.isbn,
    );
    this.advancedFilterEvent.emit(ADVANCED_SEARCH);
  }

}
