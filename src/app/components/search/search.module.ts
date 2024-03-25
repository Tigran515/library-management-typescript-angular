import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SearchComponent} from "./search.component";
import {SearchResultComponent} from "../search-result/search-result.component";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {AdvancedSearchComponent} from "../advanced-search/advanced-search.component";

@NgModule({
  declarations: [
    SearchComponent,
    SearchBarComponent,
    SearchResultComponent,
    AdvancedSearchComponent
  ],
  exports: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SearchModule {
}
