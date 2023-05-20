import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavTabComponent} from "./nav-tab.component";
import {RouterLink} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [NavTabComponent],
  imports: [
    CommonModule,
    RouterLink,
    MatTabsModule
  ],
  exports:[NavTabComponent]
})
export class NavTabModule { }
