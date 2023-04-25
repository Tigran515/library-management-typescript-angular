import {Component, OnInit} from '@angular/core';
import {Author} from "../model/author";
import {AuthorService} from "../service/author.service";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.authorService.findAll().subscribe((response:any) => {
        this.authors = response.content;
      console.log(response.content)
    });
  }
}
