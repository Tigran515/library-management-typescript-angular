import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileComponent} from "./user-profile.component";

const ROUTES: Routes = [
  {path: '', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule {}
