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
import {AuthenticationService} from "../../service/authentication.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
// import {AuthorInterceptor} from "../../interceptor/author.interceptor";


@NgModule({
  declarations: [AuthorListComponent],
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
    // AuthorService,  //it is injected in core.module (globally)

    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthorInterceptor,
    //   multi: true,
    // },
  ]
})
export class AuthorListModule {
}
