import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthHttp extends Http {

    constructor (
        backend: XHRBackend,
        options: RequestOptions,
        private router: Router,
        private authService: AuthService
    ) {
        super(backend, options);
    }

    private authRequest: Observable<Response> = null;

    request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
        let request: Request;

        if (url instanceof Request) {
            request = url;
        } else {
            request = new Request(new RequestOptions({url: url}).merge(options));
        }

        // Check if there is an token refresh request pending
        if (this.authRequest !== null) {
            // In this case, just wait for the new token before sending the request
            return this.authRequest.flatMap(() => this.authenticatedRequest(request));
        }

        return this.authenticatedRequest(request).catch(err => {

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
            return this.authRequest.flatMap(() => this.authenticatedRequest(request));

            // Notice that no error is caught here, the request had is chance but got a 401.
            // The failed auth request will take care of redirecting to the login page.
        });
    }

    private authenticatedRequest(request: Request): Observable<Response> {
        if (request.headers == null) {
            request.headers = new Headers();
        }

        if (this.authService.token != null) {
            request.headers.set('Authorization', 'Bearer ' + this.authService.token);
        }

        return super.request(request);
    }

    private requestRefresh(): void {
        let options = new RequestOptions({
            method: 'post',
            body: {refresh_token: this.authService.refreshToken}
        });

        // Request a token refresh and update auth data if successful,
        // redirect to login if refresh token expired or blacklisted
        this.authRequest = super
            .request('/api/auth/refresh', options)
            .do((response: Response) => this.authService.data = response.json())
            .catch(err => this.redirectToLogin(err))
            .finally(() => this.authRequest = null);
    }

    private redirectToLogin(err?: any): Observable<Response> {
        // TODO: maybe do nothing if already in login page?
        this.router.navigate(['/login']);
        return Observable.throw(err);
    }
}