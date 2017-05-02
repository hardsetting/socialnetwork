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
export class LoginComponent {

    loginData = { username: null, password: null };

    useLoginForm = true;
    submitting = false;
    error: string = null;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    submit(): void {
        // Set as "submitting", preventing further submissions.
        this.submitting = true;

        // Clears previous errors, if any
        this.error = null;

        this.authService.login(this.loginData.username, this.loginData.password)
            .subscribe(() => {
                this.router.navigate(['/']);
            }, (err) => {
                // TODO: use error description from server
                if (err.status == 401) {
                    this.error = 'Authentication failed.';
                } else {
                    this.error = 'Unexpected server error.';
                }
            }, () => {
                // Set as submitted, releasing the form's lock.
                this.submitting = false;
            });
    }
}