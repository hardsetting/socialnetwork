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
var HeaderComponent = (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.user.getValue();
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    //region UserMenu
    HeaderComponent.prototype.toggleUserMenu = function () {
        this.isUserMenuOpen = !this.isUserMenuOpen;
    };
    HeaderComponent.prototype.closeUserMenu = function () {
        console.log('closeUserMenu');
        this.isUserMenuOpen = false;
    };
    //endregion
    //region Notification
    HeaderComponent.prototype.toggleNotifications = function () {
    };
    HeaderComponent.prototype.closeNotifications = function () {
    };
    //endregion
    HeaderComponent.prototype.gotoFriends = function () {
        var username = this.currentUser.username;
        this.router.navigate(["/profile/" + username + "/friends"]);
    };
    HeaderComponent.prototype.gotoSuggestions = function () {
        var username = this.currentUser.username;
        this.router.navigate(["/profile/" + username + "/suggestions"]);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-header',
        //changeDetection: ChangeDetectionStrategy.OnPush,
        templateUrl: 'header.component.html',
        styleUrls: ['header.component.css']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map