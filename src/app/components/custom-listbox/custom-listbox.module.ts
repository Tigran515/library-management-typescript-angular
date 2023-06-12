import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularDualListBoxModule } from 'angular-dual-listbox';


import { CustomListboxComponent } from './custom-listbox.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    CustomListboxComponent
  ],
  exports: [
    CustomListboxComponent
  ]
})
export class CustomListboxModule { }
