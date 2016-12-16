import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OAuthHttp extends Http {
    constructor (backend: XHRBackend, options: RequestOptions) {
        super(backend, options);
    }

    private token = '4f0426a7-b76f-4758-8cdc-a88de8044532';
    private authRequest: Observable<Response> = null;

    private prepareHeaders(headers?: Headers): Headers {
        if (headers === null) {
            headers = new Headers();
        }

        headers.set('Authorization', 'Bearer ' + this.token);
        return headers;
    }

    request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
        let request: Request;

        if (url instanceof Request) {
            request = url;
        } else {
            request = new Request(new RequestOptions({url: url}).merge(options));
        }

        // Check if there is an auth request pending
        if (this.authRequest !== null) {
            // In this case, just wait for the new token before sending the request
            return this.authRequest.flatMap(() => {
                request.headers = this.prepareHeaders(request.headers);
                return super.request(request);
            });

            // Notice that no error is caught here, the request had is chance but got a 401.
            // The failed auth request will take care of redirecting to the login page.
        }

        request.headers = this.prepareHeaders(request.headers);

        return super.request(request).catch(err => {

            // Rethrow if not authentication error
            if (err.status != 401) {
                return Observable.throw(err);
            }

            // If this is the first request that gets 401, try to get a new token with the refresh token
            // otherwise just wait for the new token and retry the request.
            if (this.authRequest == null) {
                // TODO: use refresh token instead of login
                this.authRequest = this
                    .post('/api/auth', {username: 'alex.donovan', password: 'password'})
                    .do((response: Response) => this.token = response.json().token);
            }

            // Retry after auth request
            return this.authRequest.flatMap(() => {
                request.headers = this.prepareHeaders(request.headers);
                return super.request(request);
            }).do(() => this.authRequest = null);

            // Notice that no error is caught here, the request had is chance but got a 401.
            // The failed auth request will take care of redirecting to the login page.
        });
    }
}