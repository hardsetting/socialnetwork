import './rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {SearchBarComponent} from "./header/search-bar/search-bar.component";
import {UserSearchService} from "./shared/user-search.service";
import {HeaderComponent} from "./header/header.component";

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
        SearchBarComponent
    ],
    providers: [
        UserSearchService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }