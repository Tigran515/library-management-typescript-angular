import {Component, OnInit} from '@angular/core';
import {Author} from "../../model/author";
import {AuthorService} from "../../service/author.service";
// import {AuthService} from "@auth0/auth0-angular";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddAuthorModalComponent} from "../add-author-modal/add-author-modal.component";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {EditAuthorModalComponent} from "../edit-author-modal/edit-author-modal.component";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];
  isLoading: boolean = true;

  constructor(public authorService: AuthorService, private dialog: MatDialog, public auth: AuthenticationService) {
  };

  ngOnInit() {
    this.fetchAuthorList();
  };

  openAddAuthorDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddAuthorModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((saved: boolean) => {
      if (saved) {
        this.fetchAuthorList();
      }
    });
  };

  openDeleteAuthorDialog(author: Author) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Do you want to delete ${author.name} ${author.lname} ${author.sname} ? All the books of to this author will be `,
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.authorService.deleteAuthor(Number(author.id)).subscribe(() => {
          this.fetchAuthorList();
        });
      }
    });

  };

  openEditAuthorDialog(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {id: id};
    const dialogRef = this.dialog.open(EditAuthorModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((saved: boolean) => {
      if (saved) {
        this.fetchAuthorList();
      }
    });
  }

  fetchAuthorList() {
    this.authorService.findAll().subscribe((response: any) => {
      this.authors = response.content;
      this.isLoading = false;
    });
  };


}
