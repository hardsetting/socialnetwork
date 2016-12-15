import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OAuthHttp extends Http {
    constructor (backend: XHRBackend, options: RequestOptions) {
        super(backend, options);
    }

    request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
        options = options ? options : {};
        if (!options.headers) {
            options.headers = new Headers();
        }

        options.headers.append('Authorization', 'Bearer b994befa-9646-4fbb-83dc-58a33dd28d0a');

        console.log(options);

        console.log('requesting');
        return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        console.log('getting');
        return super.get(url, options);
    }
}