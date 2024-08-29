import {Component} from '@angular/core';
import {NavTabComponent} from "../../components/nav-tab/nav-tab.component";
import {LoginButtonComponent} from "../../components/login-button/login-button.component";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(public auth: AuthenticationService) {
  }

}
