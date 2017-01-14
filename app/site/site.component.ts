import {Component, OnInit} from '@angular/core';

import {AuthService} from "app/shared/auth.service";

import {Observable} from "rxjs/Observable";
import {User} from "app/models/user";

@Component({
    moduleId: module.id,
    selector: 'sn-site',
    templateUrl: 'site.component.html',
    styleUrls: ['site.component.css']
})
export class SiteComponent implements OnInit {
    user: Observable<User>;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.user = this.authService.user;
    }
}