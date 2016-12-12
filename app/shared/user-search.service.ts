import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";

import {Observable} from 'rxjs/Observable';

import {User} from "../models/user";

@Injectable()
export class UserSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<User[]> {
        return this.http
            .get(`api/users/search?name=${term}`)
            .map((r: Response) => r.json() as User[]);
    }
}