import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {User} from "../models/user";
import {AuthService} from "./auth.service";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {UserService} from "./user.service";

@Injectable()
export class UserResolver implements Resolve<User> {

    constructor(
        private authService: AuthService,
        private userService: UserService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User>|User {
        console.log('Resolving user.');
        if (!this.authService.isLoggedIn()) {
            console.error('User not logged in.');
            return null;
        }

        let user = this.authService.user.getValue();
        if (user != null) {
            console.log('User already resolved', user);
            return user;
        }

        return this.userService
            .getUser(this.authService.userId)
            .do(user => this.authService.user.next(user))
            .do((user) => console.log('User resolved successfully', user));
    }
}