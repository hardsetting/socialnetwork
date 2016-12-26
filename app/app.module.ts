import './rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {MomentModule} from "angular2-moment";

import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {LoginComponent} from "./login/login.component";
import {SearchBarComponent} from "./header/search-bar/search-bar.component";
import {HeaderComponent} from "./header/header.component";
import {ProfileComponent} from "./profile/profile.component";

import {UserService} from "./shared/user.service";
import {PostService} from "./shared/post.service";
import {NewPostComponent} from "./profile/new-post/new-post.component";
import {PostComponent} from "./profile/post/post.component";
import {AuthHttp} from "./shared/auth-http.service";

import {UserPicComponent} from "./shared/user-pic/user-pic.component";
import {ClickOutsideDirective} from "./shared/click-outside.directive";
import {AuthService} from "./shared/auth.service";
import {SiteComponent} from "./site/site.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SiteGuard} from "./site/site-guard.service";

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
        SiteComponent,
        LoginComponent,
        PageNotFoundComponent,

        HeaderComponent,
        SearchBarComponent,
        ProfileComponent,
        NewPostComponent,
        PostComponent,

        UserPicComponent,
        ClickOutsideDirective
    ],
    providers: [
        AuthHttp,
        AuthService,
        UserService,
        PostService,
        SiteGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }