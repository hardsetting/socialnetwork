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
    selector: 'sn-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    loginData = { username: null, password: null };

    useLoginForm = true;
    submitting = false;
    error = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {

    }

    submit(): void {
        this.submitting = true;
        this.error = false;

        this.authService.login(this.loginData.username, this.loginData.password)
            .subscribe(() => {
                this.router.navigate(['/']);
            }, (err) => {
                if (err.status == 401) {
                    //alert('Authentication error.');
                    this.error = true;
                }
                // TODO: manage server error
            }, () => {
                this.submitting = false;
            });
    }
}