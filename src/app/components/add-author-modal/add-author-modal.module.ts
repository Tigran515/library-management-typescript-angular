import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddAuthorModalComponent} from "./add-author-modal.component";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [AddAuthorModalComponent], //CourseDialogComponent
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [AddAuthorModalComponent]
})
export class AddAuthorModalModule {
}
