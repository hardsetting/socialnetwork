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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var user_1 = require("../models/user");
var auth_http_service_1 = require("./auth-http.service");
var auth_service_1 = require("./auth.service");
var post_1 = require("app/models/post");
var friendship_1 = require("app/models/friendship");
var UserService = (function () {
    function UserService(authHttp, authService, http) {
        this.authHttp = authHttp;
        this.authService = authService;
        this.http = http;
    }
    UserService.prototype.get = function (id) {
        // TODO: Move status logic to the server, not requiring currUser to be passed to constructor
        var currUserId = this.authService.userId;
        return this.authHttp
            .get("api/users/" + id)
            .map(function (r) { return r.json(); })
            .map(function (user) { return new user_1.User(user, currUserId); });
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
    //region Friends
    UserService.prototype.getFriends = function (userId, offset, limit) {
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 10; }
        // TODO: Move status logic to the server, not requiring currUser to be passed to constructor
        var currUserId = this.authService.userId;
        return this.authHttp
            .get("api/users/" + userId + "/friends?offset=" + offset + "&limit=" + limit)
            .map(function (r) { return r.json(); })
            .map(function (friends) { return friends.map(function (friend) { return new user_1.User(friend, currUserId); }); });
    };
    UserService.prototype.getFriendship = function (userId) {
        // TODO: Move status logic to the server, not requiring currUser to be passed to constructor
        var currUserId = this.authService.userId;
        return this.authHttp.get("api/users/" + userId + "/friendship")
            .map(function (r) { return r.json(); })
            .map(function (friendship) { return new friendship_1.Friendship(friendship, currUserId); });
    };
    UserService.prototype.befriend = function (userId) {
        // TODO: Move status logic to the server, not requiring currUser to be passed to constructor
        var currUserId = this.authService.userId;
        return this.authHttp.put("api/users/" + userId + "/friendship")
            .map(function (r) { return r.json(); })
            .map(function (friendship) { return new friendship_1.Friendship(friendship, currUserId); });
    };
    UserService.prototype.unfriend = function (userId) {
        return this.authHttp.delete("api/users/" + userId + "/friendship")
            .map(function (r) { return r.json(); });
    };
    //endregion
    UserService.prototype.getSuggestions = function (userId, limit) {
        if (limit === void 0) { limit = 16; }
        // TODO: Move status logic to the server, not requiring currUser to be passed to constructor
        var currUserId = this.authService.userId;
        return this.authHttp
            .get("api/users/" + userId + "/suggestions?limit=" + limit)
            .map(function (r) { return r.json(); })
            .map(function (friends) { return friends.map(function (friend) { return new user_1.User(friend, currUserId); }); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_http_service_1.AuthHttp,
        auth_service_1.AuthService,
        http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map