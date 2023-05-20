import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [

  {path: 'authors', loadChildren: () => import('./components/author-list/author-list.module').then(m => m.AuthorListModule)},
  {path: 'books', loadChildren: () => import('./components/book-list/book-list.module').then(m => m.BookListModule)},
  // {path: '', loadChildren: () => import('./layout/header/header.module').then(m => m.HeaderModule),pathMatch:'prefix'},
  // {path: '', loadChildren: () => import('./layout/footer/footer.module').then(m => m.FooterModule)},

  {//is it necessary ?
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
    // CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
