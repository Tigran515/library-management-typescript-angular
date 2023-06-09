import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddBookModalComponent} from "./add-book-modal.component";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {AngularDualListBoxModule} from 'angular-dual-listbox';
import {CustomListboxModule} from "../custom-listbox/custom-listbox.module";

@NgModule({
  declarations: [AddBookModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    AngularDualListBoxModule,
    CustomListboxModule
  ],
  exports: [AddBookModalComponent]
})
export class AddBookModalModule {
}
