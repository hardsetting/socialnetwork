import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from "../shared/user.service";

import {User} from "../user/user";
import {Post} from "../post/post";

import {PostService} from "../shared/post.service";
import {Observable} from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: 'sn-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
    providers: [
        UserService,
        PostService
    ]
})
export class ProfileComponent implements OnInit {

    user: User;
    posts: Post[];

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private postService: PostService
    ) {}

    ngOnInit(): void {

        this.route.params.switchMap((params: Params) => {
            return Observable.forkJoin([
                this.userService.getUser(+params['id']),
                this.postService.getUserPosts(+params['id'])
            ]);
        }).subscribe(results => {
            this.user = results[0];
            this.posts = results[1];
        });
    }

    onPost(post: Post): void {
        this.posts.unshift(post);
    }
}