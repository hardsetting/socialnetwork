import {Injectable} from '@angular/core';
import {Response, Http} from "@angular/http";

import {Observable} from 'rxjs/Observable';

import {User} from "../models/user";

@Injectable()
export class UserService {

    constructor(private http: Http) {}

    getUser(id: number): Observable<User> {
        return this.http
            .get(`api/users/${id}`)
            .map((r: Response) => r.json() as User);
    }
}