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
var auth_service_1 = require("../shared/auth.service");
var Observable_1 = require("rxjs/Observable");
var AdminGuard = (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        var _this = this;
        if (this.authService.isLoggedIn()) {
            return true;
        }
        var refreshCheck;
        if (this.authService.refreshToken) {
            refreshCheck = this.authService.refresh()
                .map(function () { return _this.authService.isLoggedIn(); })
                .catch(function () {
                _this.authService.logout();
                return Observable_1.Observable.of(false);
            });
        }
        else {
            refreshCheck = Observable_1.Observable.of(false);
        }
        return refreshCheck.do(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate(['/login']);
            }
        });
    };
    AdminGuard.prototype.canActivateChild = function () {
        return this.canActivate();
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router])
], AdminGuard);
exports.AdminGuard = AdminGuard;
//# sourceMappingURL=admin-guard.service.js.map