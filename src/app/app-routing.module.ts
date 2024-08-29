import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {authGuard} from "./guard/auth.guard";

const ROUTES: Routes = [

  {path: 'authors', loadChildren: () => import('./components/author-list/author-list.module').then(m => m.AuthorListModule)},
  {path: 'books', loadChildren: () => import('./components/book-list/book-list.module').then(m => m.BookListModule)},
  {path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
    // ,canActivate:[authGuard]},
  {path: 'profile', loadChildren: ()=> import('./components/user-profile/user-profile.module').then(m=>m.UserProfileModule),canActivate:[authGuard]},
  // {path: '', loadChildren: () => import('./layout/header/header.module').then(m => m.HeaderModule),pathMatch:'prefix'},
  // {path: '', loadChildren: () => import('./layout/footer/footer.module').then(m => m.FooterModule)},
  {path:'search',loadChildren: ()=> import('./components/search-result/search-result.module').then(m=>m.SearchResultModule)},
  {
    path: '',
    redirectTo: '/books',
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
