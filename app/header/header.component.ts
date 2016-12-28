import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Observable} from "rxjs/Observable";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'sn-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
    currentUser: Observable<User>;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.currentUser = this.authService.user;
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    gotoAdmin() {
        this.router.navigate(['/admin']);
    }
}