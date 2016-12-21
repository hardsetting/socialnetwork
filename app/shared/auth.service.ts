import {Injectable} from '@angular/core';
import {Response, Http} from "@angular/http";

import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

import {User} from "../models/user";

@Injectable()
export class AuthService {

    private static readonly KEY_TOKEN = 'auth_token';
    private static readonly KEY_REFRESH_TOKEN = 'auth_refresh_token';
    private static readonly KEY_EXPIRES_AT = 'auth_expires_at';

    currentUser: Subject<User> = new BehaviorSubject<User>(null);

    constructor(private http: Http) {
        // todo query user data if needed
    }

    login(username, password): Observable<any> {
        return this.http
            .post('/api/auth', {username: username, password: password})
            .map((response: Response) => response.json().data)
            .do(data => this.data = data);
    }

    logout() {
        this.data = {};
    }

    refresh() {
        return this.http
            .post('/api/auth/refresh', {refresh_token: this.refreshToken})
            .do((response: Response) => this.data = response.json());
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
    set data(data: any) {
        localStorage.setItem(AuthService.KEY_TOKEN, data.token);
        localStorage.setItem(AuthService.KEY_REFRESH_TOKEN, data.refresh_token);
        localStorage.setItem(AuthService.KEY_EXPIRES_AT, data.expires_at);
    }
}