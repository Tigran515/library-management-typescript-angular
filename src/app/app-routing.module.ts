import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorListComponent} from "./author-list/author-list.component";
import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./book-list/book-list.component";

const ROUTES: Routes = [
  {path: 'authors', component: AuthorListComponent},
  {path: 'books', component: BookListComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
