import {Component} from '@angular/core';
import {NavTabComponent} from "../../components/nav-tab/nav-tab.component";
import {LoginComponent} from "../../auth/auth-config/login/login.component";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(public auth: AuthService) {
  }
}
