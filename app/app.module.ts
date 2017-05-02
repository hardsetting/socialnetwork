import './rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MomentModule} from "angular2-moment";

import {AppRoutingModule} from "app/app-routing.module";

import {AppComponent} from 'app/app.component';
import {LoginComponent} from "app/login/login.component";
import {SearchBarComponent} from "app/header/search-bar/search-bar.component";
import {HeaderComponent} from "app/header/header.component";
import {ProfileComponent} from "app/site/profile/profile.component";

import {UserService} from "app/shared/user.service";
import {PostService} from "app/shared/post.service";
import {NewPostComponent} from "app/site/profile/posts/new-post/new-post.component";
import {PostComponent} from "app/site/profile/posts/post/post.component";
import {AuthHttp} from "app/shared/auth-http.service";

import {UserPicComponent} from "app/shared/user-pic/user-pic.component";
import {ClickOutsideDirective} from "./shared/click-outside.directive";
import {AuthService} from "app/shared/auth.service";
import {SiteComponent} from "app/site/site.component";
import {PageNotFoundComponent} from "app/page-not-found/page-not-found.component";
import {HomeComponent} from "app/site/home.component";
import {VisibleDirective} from "app/shared/visible.directive";

import {ModalModule} from 'angular2-modal';
import {VexModalModule} from 'angular2-modal/plugins/vex';
import {FriendsComponent} from "app/site/profile/friends/friends.component";
import {PostsComponent} from "app/site/profile/posts/posts.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MomentModule,
        ModalModule.forRoot(),
        VexModalModule,

        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SiteComponent,
        HomeComponent,
        PostsComponent,
        FriendsComponent,
        PageNotFoundComponent,

        HeaderComponent,
        SearchBarComponent,
        ProfileComponent,
        NewPostComponent,
        PostComponent,

        UserPicComponent,
        ClickOutsideDirective,
        VisibleDirective
    ],
    providers: [
        AuthHttp,
        AuthService,
        UserService,
        PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }