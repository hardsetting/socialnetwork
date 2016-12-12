import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OAuthHttp extends Http {
    constructor (backend: XHRBackend, options: RequestOptions) {
        super(backend, options);
    }

    request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options)/*.catch(err => {
            console.log("we got problem", err);
            return Observable.throw(err);
        })*/;
    }
}