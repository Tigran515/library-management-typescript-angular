import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchResultComponent} from "./search-result.component";

const ROUTES: Routes = [
  {path: '', component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SearchResultRoutingModule {
}
