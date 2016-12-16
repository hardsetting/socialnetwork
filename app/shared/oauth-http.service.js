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
var OAuthHttp = (function (_super) {
    __extends(OAuthHttp, _super);
    function OAuthHttp(backend, options) {
        var _this = _super.call(this, backend, options) || this;
        _this.token = '4f0426a7-b76f-4758-8cdc-a88de8044532';
        _this.authRequest = null;
        return _this;
    }
    OAuthHttp.prototype.prepareHeaders = function (headers) {
        if (headers === null) {
            headers = new http_1.Headers();
        }
        headers.set('Authorization', 'Bearer ' + this.token);
        return headers;
    };
    OAuthHttp.prototype.request = function (url, options) {
        var _this = this;
        var request;
        if (url instanceof http_1.Request) {
            request = url;
        }
        else {
            request = new http_1.Request(new http_1.RequestOptions({ url: url }).merge(options));
        }
        // Check if there is an auth request pending
        if (this.authRequest !== null) {
            // In this case, just wait for the new token before sending the request
            return this.authRequest.flatMap(function () {
                request.headers = _this.prepareHeaders(request.headers);
                return _super.prototype.request.call(_this, request);
            });
        }
        request.headers = this.prepareHeaders(request.headers);
        return _super.prototype.request.call(this, request).catch(function (err) {
            // Rethrow if not authentication error
            if (err.status != 401) {
                return Observable_1.Observable.throw(err);
            }
            // If this is the first request that gets 401, try to get a new token with the refresh token
            // otherwise just wait for the new token and retry the request.
            if (_this.authRequest == null) {
                // TODO: use refresh token instead of login
                _this.authRequest = _this
                    .post('/api/auth', { username: 'alex.donovan', password: 'password' })
                    .do(function (response) { return _this.token = response.json().token; });
            }
            // Retry after auth request
            return _this.authRequest.flatMap(function () {
                request.headers = _this.prepareHeaders(request.headers);
                return _super.prototype.request.call(_this, request);
            }).do(function () { return _this.authRequest = null; });
            // Notice that no error is caught here, the request had is chance but got a 401.
            // The failed auth request will take care of redirecting to the login page.
        });
    };
    return OAuthHttp;
}(http_1.Http));
OAuthHttp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.XHRBackend, http_1.RequestOptions])
], OAuthHttp);
exports.OAuthHttp = OAuthHttp;
//# sourceMappingURL=oauth-http.service.js.map