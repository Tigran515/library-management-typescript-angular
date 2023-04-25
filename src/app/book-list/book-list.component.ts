import {Component} from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.findAll().subscribe((response: any) => {
        this.books = response.content;
        console.log(response.content);
      }
    )
  }

}
