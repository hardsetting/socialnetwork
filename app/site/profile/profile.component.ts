import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {Observable} from "rxjs/Observable";
import {Modal} from "angular2-modal/plugins/vex";

import {User} from "app/models/user";
import {Post} from "app/models/post";

import {AuthService} from "app/shared/auth.service";
import {UserService} from "app/shared/user.service";
import {PostService} from "app/shared/post.service";


@Component({
    moduleId: module.id,
    selector: 'sn-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
    //providers: [Modal]
})
export class ProfileComponent implements OnInit {

    currentUser: User;

    user: User;
    posts: Post[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private userService: UserService,
        private modal: Modal
    ) {}

    ngOnInit(): void {

        this.currentUser = this.authService.user.getValue();

        this.route.params.switchMap((params: Params) => {
            return Observable.forkJoin([
                this.userService.get(params['username']),
                this.userService.getPosts(params['username'])
            ]);
        }).subscribe(results => {
            this.user = results[0];
            this.posts = results[1];
        });
    }

    gotoTimeline(): void {
        let username = this.user.username;
        this.router.navigate([`/profile/${username}`]);
    }

    friend(): void {
        this.modal.alert()
            .message('Hello world')
            .open();
    }
}