import {Injectable} from '@angular/core';
import {Response, Http, URLSearchParams} from "@angular/http";
import {Observable} from 'rxjs/Observable';

import {User} from "../models/user";
import {AuthHttp} from "./auth-http.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {AuthService} from "./auth.service";
import {Post} from "app/models/post";

@Injectable()
export class UserService {

    constructor(private authHttp: AuthHttp, private http: Http) { }

    get(id: number|string): Observable<User> {
        return this.authHttp
            .get(`api/users/${id}`)
            .map((r: Response) => r.json() as User);
    }

    getPosts(userId: number|string, before?: string): Observable<Post[]> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('before', before);

        return this.http
            .get(`api/users/${userId}/posts`, {search: params})
            .map(r => r.json())
            .map(posts => posts.map(post => new Post(post)));
            //.map((r: Response) => (r.json() as Post[]).map(post => new Post(post)));
    }

    getFriends(userId: number): Observable<User[]> {
        return this.http
            .get(`api/users/${userId}/friends`)
            .map(r => r.json())
            .map(friends => friends.map(friend => friend));
        // TODO: user constructor
    }
}