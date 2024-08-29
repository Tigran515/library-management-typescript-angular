import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {HeaderModule} from "./layout/header/header.module";
import {AuthenticationService} from "./service/authentication.service";
import {CoreModule} from "./core/core.module";
import {NavigationService} from "./service/navigation.service";
import {SearchModule} from "./components/search/search.module";
import {SearchService} from "./service/search.service";

@NgModule({
  declarations: [ // declarations: [] *Component,Directive,Pipe
    AppComponent
  ],
  imports: [// imports: [] *ModuleA,ModuleB,ModuleC
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    BrowserAnimationsModule,
    MatTabsModule, //@TODO: remove
    HeaderModule
  ],
  exports: [], // exports: [] *PublicComponent,PublicDirective,PublicPipe

  // providers[] *Service,Guard | alternative @Injectable ("root")
  providers: [AuthenticationService, NavigationService, SearchService],

  bootstrap: [AppComponent] // * Defines a component that is used to initially load your application
})
export class AppModule {
}
