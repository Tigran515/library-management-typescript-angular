import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NavTabComponent} from "./nav-tab.component";

const ROUTES: Routes = [
  {path: '', component: NavTabComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class NavTabRoutingModule { }
