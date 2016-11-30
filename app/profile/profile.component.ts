import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UserService} from "../shared/user.service";

import {User} from "../user/user";

@Component({
    moduleId: module.id,
    selector: 'sn-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
    providers: [UserService]
})
export class ProfileComponent implements OnInit {

    user: User;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.userService.getUser(+params['id']))
            .subscribe(user => this.user = user);
    }
}