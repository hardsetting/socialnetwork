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
var auth_service_1 = require("app/shared/auth.service");
var user_service_1 = require("app/shared/user.service");
var FriendsComponent = (function () {
    function FriendsComponent(route, router, authService, userService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
    }
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tmpUser;
        this.route.parent.params.switchMap(function (params) {
            return _this.userService.get(params['username']);
        }).flatMap(function (user) {
            tmpUser = user;
            return _this.userService.getFriends(user.id);
        }).subscribe(function (friends) {
            _this.user = tmpUser;
            _this.friends = friends;
        });
    };
    FriendsComponent.prototype.gotoUserProfile = function (user) {
        var username = user.username;
        this.router.navigate(["/profile/" + username]);
    };
    return FriendsComponent;
}());
FriendsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-profile-friends',
        templateUrl: 'friends.component.html',
        styleUrls: ['friends.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        auth_service_1.AuthService,
        user_service_1.UserService])
], FriendsComponent);
exports.FriendsComponent = FriendsComponent;
//# sourceMappingURL=friends.component.js.map