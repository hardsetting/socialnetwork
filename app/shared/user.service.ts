import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";

import {Observable} from 'rxjs/Observable';

import {User} from "../user/user";

@Injectable()
export class UserService {

    constructor(private http: Http) {}

    getUser(id: number): Observable<User> {
        return this.http
            .get(`api/users/${id}`)
            .map((r: Response) => r.json() as User);
    }
}