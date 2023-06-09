import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {MatDialogRef} from "@angular/material/dialog";
import {Book} from "../../model/book";
import {Author} from "../../model/author";
import {AuthorService} from "../../service/author.service";

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent implements OnInit {
  bookForm!: FormGroup;
  authors: Author[] = [];
  confirmed: Author[] = [];

  constructor(private bookService: BookService,
              private authorService: AuthorService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddBookModalComponent>) {
  }

  ngOnInit(): void {
    this.authorService.findAll().subscribe((response: any) => {
      this.authors = response.content;
    });
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      published: ['', [Validators.required, Validators.pattern('^[0-9]{1,4}$')]],
      isbn: ['', [Validators.required]], //@TODO: add validation for 13 digits ?
      // /^[\d\-]{13}$/
      authorId: ['', [Validators.required]]
    })
  }

  save() {
    if (this.bookForm.valid) {
      const AUTHOR_ID = this.bookForm.value.authorId;
      const NEW_BOOK = new Book(
        this.bookForm.value.title,
        this.bookForm.value.published,
        this.bookForm.value.isbn,
      );
      this.bookService.addBook(NEW_BOOK, AUTHOR_ID).subscribe((result: Book) => {
        this.dialogRef.close(true);
      })
    } else {
      console.error("Form is invalid")
    }
  }

  close() {
    this.dialogRef.close();
  }
}
