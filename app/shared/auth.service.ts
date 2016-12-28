import {Injectable} from '@angular/core';
import {Response, Http} from "@angular/http";

import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ReplaySubject} from "rxjs/ReplaySubject";

import {User} from "../models/user";

import * as _ from "lodash";

// TODO: split AuthService into AuthService and CurrentUserService to avoid circular dependency

@Injectable()
export class AuthService {

    private static readonly KEY_USER_ID = 'auth_user_id';
    private static readonly KEY_TOKEN = 'auth_token';
    private static readonly KEY_REFRESH_TOKEN = 'auth_refresh_token';
    private static readonly KEY_EXPIRES_AT = 'auth_expires_at';

    user = new BehaviorSubject<User>(null);

    constructor(private http: Http) {}

    isLoggedIn() {
        let expired = this.expiresAt != null && this.expiresAt < (new Date()).toISOString();
        return this.token != null && !expired;
    }

    login(username, password): Observable<any> {
        return this.http
            .post('/api/auth', {username: username, password: password})
            .do((res: Response) => this.data = res.json())
            /*.flatMap((res: Response) => this.userService.getUser(this.userId))
            .do((user: User) => this.user.next(user))*/;
    }

    logout() {
        this.clearData();
        this.user.next(null);
    }

    refresh() {
        return this.http
            .post('/api/auth/refresh', {refresh_token: this.refreshToken})
            .do((res: Response) => {
                // Ensures that userId is kept after refresh
                return _.extend(res.json(), {user_id: this.userId});
            });
    }

    get userId(): number {
        return Number(localStorage.getItem(AuthService.KEY_USER_ID));
    }

    get token(): string {
        return localStorage.getItem(AuthService.KEY_TOKEN);
    }

    get refreshToken(): string {
        return localStorage.getItem(AuthService.KEY_REFRESH_TOKEN);
    }

    get expiresAt(): string {
        return localStorage.getItem(AuthService.KEY_EXPIRES_AT);
    }

    // todo make this private
    private set data(data: any) {
        localStorage.setItem(AuthService.KEY_USER_ID, data.user_id);
        localStorage.setItem(AuthService.KEY_TOKEN, data.token);
        localStorage.setItem(AuthService.KEY_REFRESH_TOKEN, data.refresh_token);
        localStorage.setItem(AuthService.KEY_EXPIRES_AT, data.expires_at);
    }

    private clearData() {
        localStorage.removeItem(AuthService.KEY_USER_ID);
        localStorage.removeItem(AuthService.KEY_TOKEN);
        localStorage.removeItem(AuthService.KEY_REFRESH_TOKEN);
        localStorage.removeItem(AuthService.KEY_EXPIRES_AT);
    }
}