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
var auth_http_service_1 = require("./auth-http.service");
var post_1 = require("app/models/post");
var UserService = (function () {
    function UserService(authHttp, http) {
        this.authHttp = authHttp;
        this.http = http;
    }
    UserService.prototype.get = function (id) {
        return this.authHttp
            .get("api/users/" + id)
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.getPosts = function (userId, before) {
        var params = new http_1.URLSearchParams();
        params.set('before', before);
        return this.http
            .get("api/users/" + userId + "/posts", { search: params })
            .map(function (r) { return r.json(); })
            .map(function (posts) { return posts.map(function (post) { return new post_1.Post(post); }); });
        //.map((r: Response) => (r.json() as Post[]).map(post => new Post(post)));
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_http_service_1.AuthHttp, http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map