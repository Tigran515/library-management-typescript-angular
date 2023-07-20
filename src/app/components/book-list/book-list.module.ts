import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookListRoutingModule} from './book-list-routing.module';
import {BookListComponent} from "./book-list.component";
import {BookService} from "../../service/book.service";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AddBookModalModule} from "../add-book-modal/add-book-modal.module";
import {AuthorService} from "../../service/author.service";
import {ConfirmationDialogModule} from "../confirmation-dialog/confirmation-dialog.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AuthenticationService} from "../../service/authentication.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookListRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    AddBookModalModule,
    ConfirmationDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    // BookService,   // injected in core.module
    // AuthorService, // injected in core.module
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: BookInterceptor,
    //   multi: true,
    // },
  ]
})
export class BookListModule {
}
