"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var AuthHttp = (function (_super) {
    __extends(AuthHttp, _super);
    function AuthHttp(backend, options, router, authService) {
        var _this = _super.call(this, backend, options) || this;
        _this.router = router;
        _this.authService = authService;
        _this.authRequest = null;
        return _this;
    }
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
            // Rethrow if not authentication error
            if (err.status != 401) {
                return Observable_1.Observable.throw(err);
            }
            // Redirect to login immediately if refresh token not available
            if (_this.authService.refreshToken == null) {
                return _this.redirectToLogin(err);
            }
            // Request a token refresh if needed.
            if (_this.authRequest == null) {
                _this.requestRefresh();
            }
            // Retry after the token has been refreshed
            return _this.authRequest.flatMap(function () { return _this.authenticatedRequest(request); });
            // Notice that no error is caught here, the request had is chance but got a 401.
            // The failed auth request will take care of redirecting to the login page.
        });
    };
    AuthHttp.prototype.authenticatedRequest = function (request) {
        if (request.headers == null) {
            request.headers = new http_1.Headers();
        }
        if (this.authService.token != null) {
            request.headers.set('Authorization', 'Bearer ' + this.authService.token);
        }
        return _super.prototype.request.call(this, request);
    };
    AuthHttp.prototype.requestRefresh = function () {
        var _this = this;
        var options = new http_1.RequestOptions({
            method: 'post',
            body: { refresh_token: this.authService.refreshToken }
        });
        // Request a token refresh and update auth data if successful,
        // redirect to login if refresh token expired or blacklisted
        this.authRequest = _super.prototype.request.call(this, '/api/auth/refresh', options)
            .do(function (response) { return _this.authService.data = response.json(); })
            .catch(function (err) { return _this.redirectToLogin(err); })
            .finally(function () { return _this.authRequest = null; });
    };
    AuthHttp.prototype.redirectToLogin = function (err) {
        // TODO: maybe do nothing if already in login page?
        this.router.navigate(['/login']);
        return Observable_1.Observable.throw(err);
    };
    return AuthHttp;
}(http_1.Http));
AuthHttp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.XHRBackend,
        http_1.RequestOptions,
        router_1.Router,
        auth_service_1.AuthService])
], AuthHttp);
exports.AuthHttp = AuthHttp;
//# sourceMappingURL=auth-http.service.js.map