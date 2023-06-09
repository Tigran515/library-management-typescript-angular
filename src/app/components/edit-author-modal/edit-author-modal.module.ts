import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditAuthorModalComponent} from "./edit-author-modal.component";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [EditAuthorModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [EditAuthorModalComponent]
})
export class EditAuthorModalModule {
}
