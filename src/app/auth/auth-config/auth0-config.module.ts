import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from "@auth0/auth0-angular";
import {environment} from "../../../environments/environment";



@NgModule({
  declarations: [],
  imports: [
    AuthModule.forRoot({
      domain: environment.auth.DOMAIN,
      clientId: environment.auth.CLIENT_ID,
      authorizationParams: {
        audience: environment.auth.AUDIENCE,
        redirect_uri: window.location.origin
      },
      httpInterceptor: {
        allowedList: [`${environment.server.URL}/books`]
      }
    }),
    CommonModule
  ]
})
export class Auth0ConfigModule { }
