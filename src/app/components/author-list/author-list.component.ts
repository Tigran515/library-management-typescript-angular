import {Component, OnInit} from '@angular/core';
import {Author} from "../../model/author";
import {AuthorService} from "../../service/author.service";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
  providers: [AuthorService]  //@TODO: is it necessary to keep it here ?
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorService: AuthorService, public auth: AuthService) {
  }

  ngOnInit() {
    this.authorService.findAll().subscribe((response: any) => {
      this.authors = response.content;
      console.log(response.content)
    });
  }
}
