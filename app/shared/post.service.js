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
var post_1 = require("../models/post");
var auth_http_service_1 = require("./auth-http.service");
var PostService = (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.get = function (id) {
        return this.http
            .get("api/posts/" + id)
            .map(function (r) { return new post_1.Post(r.json()); });
    };
    PostService.prototype.create = function (content) {
        var post = new post_1.Post(content);
        return this.http
            .post("api/posts", post)
            .map(function (res) { return new post_1.Post(res.json()); });
    };
    PostService.prototype.edit = function (id, content) {
        var post = new post_1.Post(content);
        return this.http
            .put("api/posts/" + id, post)
            .map(function (res) { return new post_1.Post(res.json()); });
    };
    PostService.prototype.delete = function (id) {
        return this.http.delete("api/posts/" + id);
    };
    PostService.prototype.react = function (post_id, value) {
        return this.http
            .put("api/posts/" + post_id + "/react", { value: value })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.undoReact = function (post_id) {
        return this.http
            .delete("api/posts/" + post_id + "/react");
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_http_service_1.AuthHttp])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map