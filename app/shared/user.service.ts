import {Injectable} from '@angular/core';
import {Response, Http} from "@angular/http";

import {Observable} from 'rxjs/Observable';

import {User} from "../models/user";
import {AuthHttp} from "./auth-http.service";

@Injectable()
export class UserService {

    constructor(private http: Http) {}

    getUser(id: number|string): Observable<User> {
        // TODO: Cannot use AuthHttp to prevent circular depedency
        return this.http
            .get(`api/users/${id}`)
            .map((r: Response) => r.json() as User);
    }
}