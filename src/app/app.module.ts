import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {HeaderModule} from "./layout/header/header.module";

@NgModule({
  declarations: [ //Component,Directive,Pipe
    AppComponent
  ],
  imports: [//ModuleA,ModuleB,ModuleC
    BrowserModule,
    // Auth0ConfigModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    BrowserAnimationsModule,
////
    MatTabsModule, //@TODO: remove
    HeaderModule,
////
  ],
  exports: [], //PublicComponent,PublicDirective,PublicPipe
  // providers: [ // Service,Guard
  //   {
  //     provide: HTTP_INTERCEPTORS,
  // //    useClass: AuthHttpInterceptor,
  //     multi: true
  //   }],
  bootstrap: [AppComponent] //defines a component that's used to initially load your application
})
export class AppModule {
}
