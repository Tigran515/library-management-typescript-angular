import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthorService} from "../service/author.service";
import {BookService} from "../service/book.service";
// import {interceptorProviders} from "../interceptor/interceptorProviders";
import {AuthInterceptor} from "../interceptor/auth.interceptor";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    BookService,
    AuthorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}


//The core module usually contains components that are used once in an Angular application,
// such as a navigation bar, loader, footer, etc. This module should be loaded globally in AppModule.
