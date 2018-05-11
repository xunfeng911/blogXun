import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { GetInfoService } from './services/get-usr-info.service';
import { NoopInterceptor } from './intercept/index';
import { SharedModule } from './shared/share.module';
import { AppRoutingModule } from './app.routing';
import { EssayModule } from './essay/essay.module';
import { GetBlogInfoService } from './services/get-blog-info.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HomeModule,
    EssayModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    HttpClientModule,
    SharedModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptor,
    multi: true,
  },
    GetInfoService,
    GetBlogInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
