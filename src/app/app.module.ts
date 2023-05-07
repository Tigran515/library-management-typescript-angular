import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BookListComponent} from './components/book-list/book-list.component';
import {AuthHttpInterceptor, AuthModule} from "@auth0/auth0-angular";
import {LoginComponent} from './auth/auth-config/login/login.component';
import {NavTabComponent} from './components/nav-tab/nav-tab.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {Auth0ConfigModule} from './auth/auth-config/auth0-config.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthorListModule} from "./components/author-list/author-list.module";

@NgModule({
  declarations: [ //Component,Directive,Pipe
    AppComponent,
    BookListComponent,
    LoginComponent,
    NavTabComponent,
    PaginationComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [//ModuleA,ModuleB,ModuleC
    BrowserModule,
    Auth0ConfigModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    BrowserAnimationsModule,
    AuthorListModule
  ],
  exports:[], //PublicComponent,PublicDirective,PublicPipe
  providers: [ // Service,Guard
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent] //defines a component that's used to initially load your application
})
export class AppModule {
}
