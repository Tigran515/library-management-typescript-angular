import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorListComponent} from "./author-list.component";
import {AuthorService} from "../../service/author.service";

@NgModule({
  declarations: [
    AuthorListComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    AuthorService
  ]
})
export class AuthorListModule { }
