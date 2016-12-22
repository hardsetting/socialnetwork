import {Component, OnInit} from '@angular/core';

import {AuthService} from "./shared/auth.service";

import {Observable} from "rxjs/Observable";
import {User} from "./models/user";

@Component({
    moduleId: module.id,
    selector: 'sn-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
    user: Observable<User>;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.user = this.authService.user;
    }
}