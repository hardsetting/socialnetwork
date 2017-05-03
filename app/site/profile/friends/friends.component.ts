import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {Observable} from "rxjs/Observable";

import {User} from "app/models/user";

import {AuthService} from "app/shared/auth.service";
import {UserService} from "app/shared/user.service";


@Component({
    moduleId: module.id,
    selector: 'sn-profile-friends',
    templateUrl: 'friends.component.html',
    styleUrls: ['friends.component.css']
})
export class FriendsComponent implements OnInit {

    user: User;
    friends: User[];

    friendsRequest: Observable<User[]>;

    shouldLoad: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
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

        this.shouldLoad = false;
    }

    //region Data management
    loadMore(): void {
        if (this.friendsRequest != null) {
            return;
        }

        console.log('Loading more friends..');
        this.friendsRequest = this.userService
            .getFriends(this.user.id, this.friends.length)
            .do(() => {
                this.friendsRequest = null;
            })
            .catch((err) => {
                this.friendsRequest = null;
                return Observable.throw(err);
            });

        this.friendsRequest.subscribe(friends => {
            this.friends = this.friends.concat(friends);
            console.log('More friends loaded.');

            if (/*suggestions.length > 0 && */this.shouldLoad) {
                this.loadMore();
            }
        });
    }

    startLoading(): void {
        console.log('start loading');
        this.shouldLoad = true;
        this.loadMore();
    }

    stopLoading(): void {
        console.log('stop loading');
        this.shouldLoad = false;
    }
    //endregions

    //region Navigation
    gotoUserProfile(user: User): void {
        let username = user.username;
        this.router.navigate([`/profile/${username}`]);
    }
    //endregion
}