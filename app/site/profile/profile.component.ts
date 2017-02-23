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

    currentUser: User;

    user: User;
    posts: Post[];

    postsRequest: Observable<Post[]>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private userService: UserService,
        private postService: PostService
    ) {}

    ngOnInit(): void {

        this.currentUser = this.authService.user.getValue();
        /*this.authService.currentUser
            .subscribe((currentUser: User) => this.currentUser = currentUser);*/

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

    onPost(post: Post): void {
        // TODO: should check for changes
        this.posts.unshift(post);
    }

    onDelete(post: Post): void {
        let index = this.posts.indexOf(post);
        if (index >= 0) {
            this.posts.splice(index, 1);
        }
    }

    onReact(post: Post): void {
        this.userService.getPosts(this.user.username)
            .subscribe(posts => this.posts = posts);
    }

    loadMore(): void {
        if (this.postsRequest != null) {
            return;
        }

        // TODO: maybe use unix timestamp
        let lastTimestamp = this.posts[this.posts.length - 1].created_at;

        console.log('Loading more posts..');
        this.postsRequest = this.userService
            .getPosts(this.user.id, lastTimestamp)
            .finally(() => this.postsRequest = null);

        this.postsRequest .subscribe(posts => {
            this.posts = this.posts.concat(posts);
            console.log('More posts loaded');
        });
    }
}