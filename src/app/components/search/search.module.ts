import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SearchComponent} from "./search.component";
import {SearchResultComponent} from "../search-result/search-result.component";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {AdvancedSearchComponent} from "../advanced-search/advanced-search.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    SearchComponent,
    SearchBarComponent,
    AdvancedSearchComponent
  ],
  exports: [
    SearchComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ]
})
export class SearchModule {
}
