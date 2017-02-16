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
var auth_service_1 = require("./auth.service");
var user_service_1 = require("./user.service");
var UserResolver = (function () {
    function UserResolver(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    UserResolver.prototype.resolve = function (route, state) {
        var _this = this;
        console.log('Resolving user.');
        if (!this.authService.isLoggedIn()) {
            console.error('User not logged in.');
            return null;
        }
        var user = this.authService.user.getValue();
        if (user != null) {
            console.log('User already resolved', user);
            return user;
        }
        return this.userService
            .getUser(this.authService.userId)
            .do(function (user) { return _this.authService.user.next(user); })
            .do(function (user) { return console.log('User resolved successfully', user); });
    };
    return UserResolver;
}());
UserResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user-resolver.service.js.map