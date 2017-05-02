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
    selector: 'sn-profile-friends',
    templateUrl: 'friends.component.html',
    styleUrls: ['friends.component.css']
})
export class FriendsComponent implements OnInit {

    user: User;
    friends: User[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        let tmpUser: User;

        this.route.parent.params.switchMap((params: Params) => {
            return this.userService.get(params['username']);
        }).flatMap(user => {
            tmpUser = user;
            return this.userService.getFriends(user.id);
        }).subscribe(friends => {
            this.user = tmpUser;
            this.friends = friends;
        });
    }

    gotoUserProfile(user: User): void {
        let username = user.username;
        this.router.navigate([`/profile/${username}`]);
    }
}