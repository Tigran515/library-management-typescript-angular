import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavTabComponent} from "./nav-tab.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [NavTabComponent],
  imports: [
    CommonModule,
    RouterLink,
    MatTabsModule,
    RouterLinkActive
  ],
  exports:[NavTabComponent]
})
export class NavTabModule { }
