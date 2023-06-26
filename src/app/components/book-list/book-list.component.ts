import {Component} from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddBookModalComponent} from "../add-book-modal/add-book-modal.component";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  books: Book[] = [];
  isLoading: boolean = true;

  constructor(private bookService: BookService, private dialog: MatDialog) {
  };

  ngOnInit() {
    // this.bookService.findAll().subscribe((response: any) => {
    //     this.books = response.content;
    //     this.isLoading = false;
    //   }
    // );
    this.fetchBookList();
  };

  openAddBookDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddBookModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((saved: boolean) => {
      if (saved) {
        this.fetchBookList();
      }
    });
  };

  openDeleteBookDialog(book: Book) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Do you want to delete ${book.title} ${book.published} book ? `,
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.bookService.deleteBook(Number(book.id)).subscribe(() => {
          this.fetchBookList();
        });
      }
    });
  };

  fetchBookList() {
    this.bookService.findAll().subscribe((response: any) => {
      this.books = response.content;
      this.isLoading = false;
    });
  };

}
