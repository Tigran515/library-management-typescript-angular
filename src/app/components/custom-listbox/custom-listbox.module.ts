import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularDualListBoxModule } from 'angular-dual-listbox';


import { CustomListBoxComponent } from './custom-list-box.component';
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
    CustomListBoxComponent
  ],
  exports: [
    CustomListBoxComponent
  ]
})
export class CustomListboxModule { }
