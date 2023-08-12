import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {UserDto} from "../../dto/UserDto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public name: string | undefined;
  public lastName: string | undefined;
  public surname: string | undefined;
  public user: UserDto | null | undefined;
  public isEditing: boolean = false;
  userForm!: FormGroup;

  constructor(private auth: AuthenticationService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.user = this.auth.getUserInformation();

    this.userForm = this.fb.group({
      name: [this.user?.name, [Validators.required]],
      lastName: [this.user?.lname, [Validators.required]],
      surname: [this.user?.sname, [Validators.required]],
    })
  }

}
