"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var AuthHttp = (function () {
    function AuthHttp(http, router, authService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.authRequest = null;
    }
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
    AuthHttp.prototype.request = function (url, options) {
        var _this = this;
        var request;
        if (url instanceof http_1.Request) {
            request = url;
        }
        else {
            request = new http_1.Request(new http_1.RequestOptions({ url: url }).merge(options));
        }
        // Check if there is an token refresh request pending
        if (this.authRequest !== null) {
            // In this case, just wait for the new token before sending the request
            return this.authRequest.flatMap(function () { return _this.authenticatedRequest(request); });
        }
        return this.authenticatedRequest(request).catch(function (err) {
            // Retry after the token has been refreshed
            return _this.manageAuthError(err)
                .flatMap(function () { return _this.authenticatedRequest(request); });
            // Notice that no error is caught here, the request had is chance but got a 401.
            // The failed auth request will take care of redirecting to the login page and the
            // error is propagated to the caller
        });
    };
    AuthHttp.prototype.get = function (url, options) {
        var request = new http_1.Request(new http_1.RequestOptions({ method: http_1.RequestMethod.Get, url: url }).merge(options));
        return this.request(request);
    };
    AuthHttp.prototype.post = function (url, body, options) {
        var request = new http_1.Request(new http_1.RequestOptions({ method: http_1.RequestMethod.Post, url: url, body: body }).merge(options));
        return this.request(request);
    };
    AuthHttp.prototype.delete = function (url, options) {
        var request = new http_1.Request(new http_1.RequestOptions({ method: http_1.RequestMethod.Delete, url: url }).merge(options));
        return this.request(request);
    };
    AuthHttp.prototype.authenticatedRequest = function (request) {
        if (request.headers == null) {
            request.headers = new http_1.Headers();
        }
        if (this.authService.token != null) {
            request.headers.set('Authorization', 'Bearer ' + this.authService.token);
        }
        return this.http.request(request);
    };
    AuthHttp.prototype.manageAuthError = function (err) {
        // Rethrow if not authentication error
        if (err.status != 401) {
            return Observable_1.Observable.throw(err);
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
    };
    AuthHttp.prototype.requestRefresh = function () {
        var _this = this;
        // Request a token refresh, redirect to login if refresh token expired or blacklisted
        this.authRequest = this.authService.refresh()
            .catch(function (err) { return _this.redirectToLogin(err); })
            .finally(function () { return _this.authRequest = null; });
    };
    AuthHttp.prototype.redirectToLogin = function (err) {
        // TODO: maybe do nothing if already in login page?
        this.authService.logout();
        this.router.navigate(['/login']);
        return Observable_1.Observable.throw(err);
    };
    return AuthHttp;
}());
AuthHttp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router,
        auth_service_1.AuthService])
], AuthHttp);
exports.AuthHttp = AuthHttp;
//# sourceMappingURL=auth-http.service.js.map