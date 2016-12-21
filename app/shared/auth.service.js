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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AuthService = AuthService_1 = (function () {
    function AuthService(http) {
        this.http = http;
        this.currentUser = new BehaviorSubject_1.BehaviorSubject(null);
        // todo query user data if needed
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http
            .post('/api/auth', { username: username, password: password })
            .map(function (response) { return response.json().data; })
            .do(function (data) { return _this.data = data; });
    };
    AuthService.prototype.logout = function () {
        this.data = {};
    };
    AuthService.prototype.refresh = function () {
        var _this = this;
        return this.http
            .post('/api/auth/refresh', { refresh_token: this.refreshToken })
            .do(function (response) { return _this.data = response.json(); });
    };
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return localStorage.getItem(AuthService_1.KEY_TOKEN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "refreshToken", {
        get: function () {
            return localStorage.getItem(AuthService_1.KEY_REFRESH_TOKEN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "expiresAt", {
        get: function () {
            return localStorage.getItem(AuthService_1.KEY_EXPIRES_AT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "data", {
        // todo make this private
        set: function (data) {
            localStorage.setItem(AuthService_1.KEY_TOKEN, data.token);
            localStorage.setItem(AuthService_1.KEY_REFRESH_TOKEN, data.refresh_token);
            localStorage.setItem(AuthService_1.KEY_EXPIRES_AT, data.expires_at);
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}());
AuthService.KEY_TOKEN = 'auth_token';
AuthService.KEY_REFRESH_TOKEN = 'auth_refresh_token';
AuthService.KEY_EXPIRES_AT = 'auth_expires_at';
AuthService = AuthService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
var AuthService_1;
//# sourceMappingURL=auth.service.js.map