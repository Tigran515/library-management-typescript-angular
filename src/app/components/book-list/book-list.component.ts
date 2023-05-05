import {Component} from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import {AuthorService} from "../../service/author.service";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent {
  books: Book[] = [];

  constructor(private bookService: BookService, public auth: AuthService) {
  }

  ngOnInit() {
    this.bookService.findAll().subscribe((response: any) => {
        this.books = response.content;
      }
    )
  }

}
