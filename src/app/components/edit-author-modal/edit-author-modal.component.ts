import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthorService} from "../../service/author.service";
import {Author} from "../../model/author";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-author-modal',
  templateUrl: './edit-author-modal.component.html',
  styleUrls: ['./edit-author-modal.component.css']
})
export class EditAuthorModalComponent implements OnInit {
  author: Author | undefined;
  form: FormGroup;

  constructor(private authorService: AuthorService, private dialogRef: MatDialogRef<EditAuthorModalComponent>, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) private data: {
    id: number
  }) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      lname: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      sname: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      born: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(/^[0-9]+$/)]]
    });
  }

  ngOnInit(): void {
    if (this.data.id !== null) {
      this.authorService.findById(this.data.id).subscribe((response: Author) => {
          this.author = response;
          this.form.setValue({
            name: this.author.name,
            lname: this.author.lname,
            sname: this.author.sname,
            born: this.author.born
          });
        }
      );
    }
  };

  updateForm() {
    const updatedValues: Partial<Author> = {};

    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);

      if (control && control.valid && this.author && (this.author as any)[key] !== undefined && control.value !== (this.author as any)[key]) {
        updatedValues[key as keyof Author] = control.value; // key as keyof Author: This is a type assertion that tells TypeScript to treat key as a valid key of the Author type.
      }
    });

    if (this.author) {
      this.author = {...this.author, ...updatedValues};
      this.authorService.updateAuthorFields(this.data.id, this.author).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  cancel() {
    this.dialogRef.close();
  }

}
