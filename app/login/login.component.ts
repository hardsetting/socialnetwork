import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from "../shared/user.service";

import {User} from "../models/user";
import {Post} from "../models/post";

import {PostService} from "../shared/post.service";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../shared/auth.service";
import {Response} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'sn-profile',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    data = { username: null, password: null };

    submitting = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {

    }

    submit(): void {
        console.log('lol');

        this.submitting = true;
        this.authService.login(this.data.username, this.data.password)
            .subscribe(() => {
                this.router.navigate(['/profile', this.authService.userId]);
            }, (err) => {
                if (err.status == 401) {
                    alert('Authentication error.');
                }
                // TODO: manage server error
            }, () => {
                this.submitting = false;
            });
    }
}