import {Injectable} from '@angular/core';
import {Response, Http} from "@angular/http";

import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ReplaySubject} from "rxjs/ReplaySubject";

import {User} from "../models/user";

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
        console.log(`Logging in with username ${username}.`);
        return this.http
            .post('/api/auth/login', {username: username, password: password})
            .do(() => console.log('Login successful.'))
            .do((res: Response) => this.data = res.json())
            /*.flatMap((res: Response) => this.userService.get(this.userId))
            .do((user: User) => this.user.next(user))*/;
    }

    logout() {
        console.log('Logging out.');
        this.clearData();
        console.log('Logout successful.');
        this.user.next(null);
    }

    refresh(): Observable<Response> {
        console.log('Refreshing token.');
        return this.http
            .post('/api/auth/refresh', {refresh_token: this.refreshToken})
            .do((res: Response) => {
                // Ensures that userId is kept after refresh
                console.log('Refresh token successful.');
                this.data = Object.assign(res.json(), {user_id: this.userId});
            })
            /*.catch(err => {
                this.logout();
                return Observable.throw(err);
            })*/;
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

    private set data(data: any) {
        console.log('Setting auth data.');
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