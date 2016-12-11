import './rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MomentModule} from "angular2-moment";

import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {SearchBarComponent} from "./header/search-bar/search-bar.component";
import {HeaderComponent} from "./header/header.component";
import {ProfileComponent} from "./profile/profile.component";

import {UserService} from "./shared/user.service";
import {UserSearchService} from "./shared/user-search.service";
import {PostService} from "./shared/post.service";
import {NewPostComponent} from "./profile/new-post/new-post.component";
import {PostComponent} from "./profile/post/post.component";

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
        UserService,
        PostService,
        UserSearchService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }