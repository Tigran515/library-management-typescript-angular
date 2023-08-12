import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
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
    this.authorService.findAll().subscribe((response: any): void => {
      this.authors = response.content;
    });
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      published: ['', [Validators.required, Validators.pattern('^[0-9]{1,4}$'), Validators.minLength(4), Validators.maxLength(4),Validators.max(2023)]], // change to current Date
      isbn: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
    })
  }

//@TODO: BUG: VALIDATE custom-list-box authorList, should at least contain one value !!!!!!!!!!!

  save(): void {
    if (this.bookForm.valid && this.confirmed.length > 0) { // double validation
      const AUTHOR_ID_LIST = this.confirmed.map(author => author.id);

      const NEW_BOOK = new Book(
        this.bookForm.value.title,
        this.bookForm.value.published,
        this.bookForm.value.isbn,
      );
      this.bookService.addBook(NEW_BOOK, AUTHOR_ID_LIST).subscribe((result: Book) => {
        this.dialogRef.close(true);
      })
    } else {
      console.error("Form is invalid")
    }
  }

  close() {
    this.dialogRef.close();
  }

  public isFormValid():boolean{
    return this.bookForm.valid && this.confirmed.length > 0;
  }
}
