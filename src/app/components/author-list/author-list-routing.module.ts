import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthorListComponent} from "./author-list.component";

const ROUTES: Routes = [
  {path: '', component: AuthorListComponent

    // ,canActivate:[authGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AuthorListRoutingModule {
}

//,children:[{path:id,component: AuthorById}]}
