import './rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {SearchBarComponent} from "./header/search-bar/search-bar.component";
import {HeaderComponent} from "./header/header.component";
import {ProfileComponent} from "./profile/profile.component";

import {UserService} from "./shared/user.service";
import {UserSearchService} from "./shared/user-search.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchBarComponent,
        ProfileComponent
    ],
    providers: [
        UserService,
        UserSearchService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }