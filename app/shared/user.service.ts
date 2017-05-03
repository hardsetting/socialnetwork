import {Injectable} from '@angular/core';
import {Response, Http, URLSearchParams} from "@angular/http";
import {Observable} from 'rxjs/Observable';

import {User} from "../models/user";
import {AuthHttp} from "./auth-http.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {AuthService} from "./auth.service";
import {Post} from "app/models/post";
import {Friendship} from "app/models/friendship";

@Injectable()
export class UserService {

    constructor(
        private authHttp: AuthHttp,
        private authService: AuthService,
        private http: Http
    ) { }

    get(id: number|string): Observable<User> {
        // TODO: Move status logic to the server, not requiring currUser to be passed to constructor
        let currUserId = this.authService.userId;

        return this.authHttp
            .get(`api/users/${id}`)
            .map(r => r.json())
            .map(user => new User(user, currUserId));
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

    //region Friends
    getFriends(userId: number, offset: number = 0, limit: number = 10): Observable<User[]> {
        // TODO: Move status logic to the server, not requiring currUser to be passed to constructor
        let currUserId = this.authService.userId;

        return this.authHttp
            .get(`api/users/${userId}/friends?offset=${offset}&limit=${limit}`)
            .map(r => r.json())
            .map(friends => friends.map(friend => new User(friend, currUserId)));
    }

    getFriendship(userId: number): Observable<Friendship> {
        // TODO: Move status logic to the server, not requiring currUser to be passed to constructor
        let currUserId = this.authService.userId;

        return this.authHttp.get(`api/users/${userId}/friendship`)
            .map(r => r.json())
            .map(friendship => new Friendship(friendship, currUserId));
    }

    befriend(userId: number): Observable<Friendship> {
        // TODO: Move status logic to the server, not requiring currUser to be passed to constructor
        let currUserId = this.authService.userId;

        return this.authHttp.put(`api/users/${userId}/friendship`)
            .map(r => r.json())
            .map(friendship => new Friendship(friendship, currUserId));
    }

    unfriend(userId: number): Observable<void> {
        return this.authHttp.delete(`api/users/${userId}/friendship`)
            .map(r => r.json());
    }
    //endregion

    getSuggestions(userId: number, limit: number = 16): Observable<User[]> {
        // TODO: Move status logic to the server, not requiring currUser to be passed to constructor
        let currUserId = this.authService.userId;

        return this.authHttp
            .get(`api/users/${userId}/suggestions?limit=${limit}`)
            .map(r => r.json())
            .map(friends => friends.map(friend => new User(friend, currUserId)));
    }
}