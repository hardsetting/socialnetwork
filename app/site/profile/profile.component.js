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
var router_1 = require("@angular/router");
var user_service_1 = require("../../shared/user.service");
var post_service_1 = require("../../shared/post.service");
var Observable_1 = require("rxjs/Observable");
var auth_service_1 = require("../../shared/auth.service");
var ProfileComponent = (function () {
    function ProfileComponent(route, router, authService, userService, postService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.postService = postService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.user.getValue();
        /*this.authService.currentUser
            .subscribe((currentUser: User) => this.currentUser = currentUser);*/
        this.route.params.switchMap(function (params) {
            return Observable_1.Observable.forkJoin([
                _this.userService.getUser(params['username']),
                _this.postService.getUserPosts(params['username'])
            ]);
        }).subscribe(function (results) {
            _this.user = results[0];
            _this.posts = results[1];
        });
    };
    ProfileComponent.prototype.onPost = function (post) {
        // TODO: should check for changes
        this.posts.unshift(post);
    };
    ProfileComponent.prototype.onDelete = function (post) {
        var index = this.posts.indexOf(post);
        if (index >= 0) {
            this.posts.splice(index, 1);
        }
    };
    ProfileComponent.prototype.onReact = function (post) {
        var _this = this;
        this.postService.getUserPosts(this.user.username)
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-profile',
        templateUrl: 'profile.component.html',
        styleUrls: ['profile.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        auth_service_1.AuthService,
        user_service_1.UserService,
        post_service_1.PostService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map