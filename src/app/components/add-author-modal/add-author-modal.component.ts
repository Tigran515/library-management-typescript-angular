import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Author} from "../../model/author";
import {AuthorService} from "../../service/author.service";
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-author-modal',
  templateUrl: './add-author-modal.component.html',
  styleUrls: ['./add-author-modal.component.css']
})
export class AddAuthorModalComponent implements OnInit { //@TODO: rename the component and file name
  description: string = "Add Author";
  authorForm!: FormGroup;

  constructor(private authorService: AuthorService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddAuthorModalComponent>,
  ) {
  }

  ngOnInit(): void {
    this.authorForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[^0-9]+$/)]],
      lname: ['', [Validators.pattern(/^[^0-9]+$/)]],
      sname: ['', [Validators.pattern(/^[^0-9]+$/)]],
      born: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(/^[0-9]+$/), Validators.max(2023)]]
    });
  };

  save(): void {
    if (this.authorForm.valid) {
      const NEW_AUTHOR: Author = new Author( //@TODO: chang to lowercase
        this.authorForm.value.name,
        this.authorForm.value.lname,
        this.authorForm.value.sname,
        this.authorForm.value.born);
      console.log("NEW_AUTHOR", NEW_AUTHOR);
      this.authorService.addAuthor(NEW_AUTHOR).subscribe(() => {
        this.dialogRef.close(true);
      })
    } else {
      console.error("Form is invalid");  //@TODO: add error handler
    }
  }

  close() {
    this.dialogRef.close();
  }

}
