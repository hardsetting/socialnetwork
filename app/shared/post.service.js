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
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var post_1 = require("../models/post");
var angular2_jwt_1 = require("angular2-jwt");
var PostService = (function () {
    function PostService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
    }
    PostService.prototype.getUserPosts = function (userId) {
        return this.http
            .get("api/users/" + userId + "/posts")
            .map(function (r) { return r.json(); });
    };
    PostService.prototype.create = function (userId, content) {
        var post = new post_1.Post(userId, content);
        return this.authHttp
            .post("api/posts", post)
            .map(function (r) { return r.json(); });
    };
    PostService.prototype.delete = function (id) {
        return this.http.delete("api/posts/" + id);
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map