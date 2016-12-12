import './rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {MomentModule} from "angular2-moment";

import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {SearchBarComponent} from "./header/search-bar/search-bar.component";
import {HeaderComponent} from "./header/header.component";
import {ProfileComponent} from "./profile/profile.component";

import {UserService} from "./shared/user.service";
import {PostService} from "./shared/post.service";
import {NewPostComponent} from "./profile/new-post/new-post.component";
import {PostComponent} from "./profile/post/post.component";
import {OAuthHttp} from "./shared/oauth-http.service";

import {AUTH_PROVIDERS} from 'angular2-jwt';
import {provideAuth} from 'angular2-jwt';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MomentModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchBarComponent,
        ProfileComponent,
        NewPostComponent,
        PostComponent
    ],
    providers: [
        provideAuth({
            tokenGetter: () => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
        }),
        //{ provide: Http, useClass: OAuthHttp, deps: [XHRBackend, RequestOptions] },
        UserService,
        PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }