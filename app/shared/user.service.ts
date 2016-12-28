import {Injectable} from '@angular/core';
import {Response, Http} from "@angular/http";

import {Observable} from 'rxjs/Observable';

import {User} from "../models/user";
import {AuthHttp} from "./auth-http.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {AuthService} from "./auth.service";

@Injectable()
export class UserService {

    constructor(private authHttp: AuthHttp) { }

    getUser(id: number|string): Observable<User> {
        return this.authHttp
            .get(`api/users/${id}`)
            .map((r: Response) => r.json() as User);
    }
}