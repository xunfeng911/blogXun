import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/share.module';
import { AppRoutingModule } from './routes/app.routing';
import { CoreModule } from './core/core.module';
import { NoopInterceptor } from './core/intercept';
import { HomeModule } from './routes/home/home.module';
import { EssayModule } from './routes/essay/essay.module';


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
        CoreModule,
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
    }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
