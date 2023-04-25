import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
// import { AuthorComponent } from './author/author.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {AuthorService} from "./service/author.service";
import { BookListComponent } from './book-list/book-list.component';
import {BookService} from "./service/book.service";

@NgModule({
  declarations: [
    AppComponent,
    // AuthorComponent,
    AuthorListComponent,
    BookListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterOutlet,
    ],
  providers: [AuthorService,BookService], // how about book ?
  bootstrap: [AppComponent]
})
export class AppModule { }

//@TODO: add Bootstrap src in angular.json
