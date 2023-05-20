import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import {NavTabModule} from "../../components/nav-tab/nav-tab.module";
import {LoginModule} from "../../auth/auth-config/login/login.module";


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
    LoginModule
  ]
})
export class HeaderModule { }
