import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import {Observable} from 'rxjs/Observable';

import {Post} from "../models/post";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class PostService {

    constructor(private http: Http) {}

    getUserPosts(userId: number): Observable<Post[]> {
        return this.http
            .get(`api/users/${userId}/posts`)
            .map((r: Response) => r.json() as Post[]);
    }

    create(content: string): Observable<Post> {
        let post = new Post(content);
        return this.http
            .post(`api/posts`, post)
            .map((r: Response) => r.json() as Post);
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`api/posts/${id}`);
    }
}