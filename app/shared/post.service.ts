import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import {Observable} from 'rxjs/Observable';

import {Post} from "../models/post";
import {AuthHttp} from "./auth-http.service";
import {Reaction} from "app/models/reaction";

@Injectable()
export class PostService {

    constructor(private http: AuthHttp) {}

    get(id: number): Observable<Post> {
        return this.http
            .get(`api/posts/${id}`)
            .map((r: Response) => new Post(r.json()));
    }

    getUserPosts(userId: number|string): Observable<Post[]> {
        return this.http
            .get(`api/users/${userId}/posts`)
            .map((r: Response) => (r.json() as Post[]).map(post => new Post(post)));
    }

    create(content: string): Observable<Post> {
        let post = new Post(content);
        return this.http
            .post(`api/posts`, post)
            .map((res: Response) => new Post(res.json()));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`api/posts/${id}`);
    }

    react(post_id: number, value: string): Observable<Reaction> {
        return this.http
            .post(`api/posts/${post_id}/react`, {value: value})
            .map((res: Response) => res.json() as Reaction);
    }

    undoReact(post_id: number): Observable<Response> {
        return this.http
            .delete(`api/posts/${post_id}/react`);
    }
}