import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {UserService} from "../../shared/user.service";

import {User} from "../../models/user";
import {Post} from "../../models/post";

import {PostService} from "../../shared/post.service";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../shared/auth.service";

@Component({
    moduleId: module.id,
    selector: 'sn-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

    //currentUser: Observable<User>;

    user: User;
    posts: Post[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private userService: UserService,
        private postService: PostService
    ) {}

    ngOnInit(): void {

        //this.currentUser = this.authService.currentUser;
        /*this.authService.currentUser
            .subscribe((currentUser: User) => this.currentUser = currentUser);*/

        this.route.params.switchMap((params: Params) => {
            return Observable.forkJoin([
                this.userService.getUser(params['username']),
                this.postService.getUserPosts(params['username'])
            ]);
        }).subscribe(results => {
            this.user = results[0];
            this.posts = results[1];
        });
    }

    onPost(post: Post): void {
        this.posts.unshift(post);
    }

    onDelete(post: Post): void {
        let index = this.posts.indexOf(post);
        if (index >= 0) {
            this.posts.splice(index, 1);
        }
    }
}