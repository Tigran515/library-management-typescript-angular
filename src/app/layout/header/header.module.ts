import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import {NavTabModule} from "../../components/nav-tab/nav-tab.module";
import {LoginButtonModule} from "../../components/login-button/login-button.module";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    NavTabModule,
    LoginButtonModule
  ]
})
export class HeaderModule { }
