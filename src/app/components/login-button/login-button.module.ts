import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {LoginButtonComponent} from "./login-button.component";


@NgModule({
  declarations: [LoginButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [LoginButtonComponent]

})
export class LoginButtonModule {
}
