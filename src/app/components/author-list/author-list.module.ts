import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorListComponent} from "./author-list.component";
import {AuthorService} from "../../service/author.service";
import {AuthorListRoutingModule} from "./author-list-routing.module";
import {MatTableModule} from "@angular/material/table";
import {AddAuthorModalModule} from "../add-author-modal/add-author-modal.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ConfirmationDialogModule} from "../confirmation-dialog/confirmation-dialog.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {EditAuthorModalModule} from "../edit-author-modal/edit-author-modal.module";

@NgModule({
  declarations: [
    AuthorListComponent
  ],
  imports: [
    CommonModule,
    AuthorListRoutingModule,
    MatTableModule,
    AddAuthorModalModule,
    EditAuthorModalModule,
    ConfirmationDialogModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthorService,
  ]
})
export class AuthorListModule {
}
