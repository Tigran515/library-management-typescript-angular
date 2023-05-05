import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorListComponent} from "./components/author-list/author-list.component";
import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./components/book-list/book-list.component";

const ROUTES: Routes = [
  {path: 'authors', component: AuthorListComponent},
  {path: 'books', component: BookListComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
