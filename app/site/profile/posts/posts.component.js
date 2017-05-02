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
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var vex_1 = require("angular2-modal/plugins/vex");
var auth_service_1 = require("app/shared/auth.service");
var user_service_1 = require("app/shared/user.service");
var post_service_1 = require("app/shared/post.service");
var PostsComponent = (function () {
    function PostsComponent(route, router, authService, userService, postService, modal) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.postService = postService;
        this.modal = modal;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.user.getValue();
        this.route.params.switchMap(function (params) {
            return Observable_1.Observable.forkJoin([
                _this.userService.get(params['username']),
                _this.userService.getPosts(params['username'])
            ]);
        }).subscribe(function (results) {
            _this.user = results[0];
            _this.posts = results[1];
        });
    };
    PostsComponent.prototype.onPost = function (post) {
        // TODO: should check for changes
        this.posts.unshift(post);
    };
    PostsComponent.prototype.onDelete = function (post) {
        var index = this.posts.indexOf(post);
        if (index >= 0) {
            this.posts.splice(index, 1);
        }
    };
    PostsComponent.prototype.onReact = function (post) {
        var _this = this;
        this.userService.getPosts(this.user.username)
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    PostsComponent.prototype.loadMore = function () {
        var _this = this;
        if (this.postsRequest != null) {
            return;
        }
        // TODO: maybe use unix timestamp
        var lastTimestamp = this.posts[this.posts.length - 1].created_at;
        console.log('Loading more posts..');
        this.postsRequest = this.userService
            .getPosts(this.user.id, lastTimestamp)
            .finally(function () { return _this.postsRequest = null; });
        this.postsRequest.subscribe(function (posts) {
            _this.posts = _this.posts.concat(posts);
            console.log('More posts loaded');
        });
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-profile-posts',
        templateUrl: 'posts.component.html',
        styleUrls: ['posts.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        auth_service_1.AuthService,
        user_service_1.UserService,
        post_service_1.PostService,
        vex_1.Modal])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map