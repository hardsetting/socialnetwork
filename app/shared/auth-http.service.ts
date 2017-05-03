import {Injectable} from '@angular/core';
import {
    Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers,
    RequestMethod
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthHttp {

    constructor (
        private http: Http,
        private router: Router,
        private authService: AuthService
    ) { }

    private authRequest: Observable<Response> = null;

    // Case 1

    /*get(url: string, options?: RequestOptions): Observable<Response> {
        return this.http.get(url, this.setAuthHeader(options))
            .catch(err => {
                // Retry after the token has been refreshed
                return this.manageAuthError(err)
                    .flatMap(() => this.http.get(url, this.setAuthHeader(options)));

                // Notice that no error is caught here, the request had is chance but got a 401.
                // The failed auth request will take care of redirecting to the login page and the
                // error is propagated to the caller
            });
    }

    post(url: string, body: any, options?: RequestOptions): Observable<Response> {
        return this.http.post(url, body, this.setAuthHeader(options))
            .catch(err => {
                // Retry after the token has been refreshed
                return this.manageAuthError(err)
                    .flatMap(() => this.http.post(url, body, this.setAuthHeader(options)));

                // Notice that no error is caught here, the request had is chance but got a 401.
                // The failed auth request will take care of redirecting to the login page and the
                // error is propagated to the caller
            });
    }

    // ecc..

    private setAuthHeader(options?: RequestOptions): RequestOptions {
        if (options == null) {
            options = new RequestOptions();
        }

        if (options.headers == null) {
            options.headers = new Headers();
        }

        if (this.authService.token != null) {
            options.headers.set('Authorization', 'Bearer ' + this.authService.token);
        }

        return options;
    }*/

    // Case 2

    request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
        let request: Request;

        if (url instanceof Request) {
            request = url;
        } else {
            request = new Request(new RequestOptions({url: url as string}).merge(options));
        }

        // Check if there is an token refresh request pending
        if (this.authRequest !== null) {
            // In this case, just wait for the new token before sending the request
            return this.authRequest.flatMap(() => this.authenticatedRequest(request));
        }

        return this.authenticatedRequest(request).catch(err => {
            // Retry after the token has been refreshed
            return this.manageAuthError(err)
                .flatMap(() => this.authenticatedRequest(request));

            // Notice that no error is caught here, the request had is chance but got a 401.
            // The failed auth request will take care of redirecting to the login page and the
            // error is propagated to the caller
        });
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        let request = new Request(new RequestOptions({method: RequestMethod.Get, url: url}).merge(options));
        return this.request(request);
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        let request = new Request(new RequestOptions({method: RequestMethod.Post, url: url, body: body}).merge(options));
        return this.request(request);
    }

    put(url: string, body?: any, options?: RequestOptionsArgs): Observable<Response> {
        let request = new Request(new RequestOptions({method: RequestMethod.Put, url: url, body: body}).merge(options));
        return this.request(request);
    }

    patch(url: string, body?: any, options?: RequestOptionsArgs): Observable<Response> {
        let request = new Request(new RequestOptions({method: RequestMethod.Patch, url: url, body: body}).merge(options));
        return this.request(request);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        let request = new Request(new RequestOptions({method: RequestMethod.Delete, url: url}).merge(options));
        return this.request(request);
    }

    private authenticatedRequest(request: Request): Observable<Response> {
        if (request.headers == null) {
            request.headers = new Headers();
        }

        if (this.authService.token != null) {
            request.headers.set('Authorization', 'Bearer ' + this.authService.token);
        }

        return this.http.request(request);
    }

    private manageAuthError(err): Observable<Response> {
        // Rethrow if not authentication error
        if (err.status != 401) {
            return Observable.throw(err);
        }

        // Redirect to login immediately if refresh token not available
        if (this.authService.refreshToken == null) {
            return this.redirectToLogin(err);
        }

        // Request a token refresh if needed.
        if (this.authRequest == null) {
            this.requestRefresh();
        }

        // Retry after the token has been refreshed
        return this.authRequest;
    }

    private requestRefresh(): void {
        // Request a token refresh, redirect to login if refresh token expired or blacklisted
        this.authRequest = this.authService.refresh()
            .catch(err => this.redirectToLogin(err))
            .finally(() => { this.authRequest = null });
    }

    private redirectToLogin(err?: any): Observable<Response> {
        // TODO: maybe do nothing if already in login page?
        this.authService.logout();
        this.router.navigate(['/login']);
        return Observable.throw(err);
    }
}