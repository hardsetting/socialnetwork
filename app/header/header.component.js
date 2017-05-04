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
var notification_service_1 = require("app/shared/notification.service");
var Observable_1 = require("rxjs/Observable");
var HeaderComponent = (function () {
    function HeaderComponent(authService, notificationService, router) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.router = router;
    }
    Object.defineProperty(HeaderComponent.prototype, "unread_notification_count", {
        get: function () {
            if (this.notifications) {
                return this.notifications.filter(function (n) { return n.read_at == null; }).length;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    //region Lifecycle
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.user.getValue();
        this.isUserMenuOpen = false;
        this.isNotificationMenuOpen = false;
        this.notificationCheckTimer = Observable_1.Observable.timer(0, 5000).switchMap(function () {
            return _this.notificationService
                .getLatests();
        }).subscribe(function (notifications) {
            _this.notifications = notifications;
        }, function (err) {
            console.warn('Could not fetch notifications.', err);
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.notificationCheckTimer.unsubscribe();
    };
    //endregion
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
    //region NotificationsMenu
    HeaderComponent.prototype.toggleNotificationsMenu = function () {
        this.isNotificationMenuOpen = !this.isNotificationMenuOpen;
    };
    HeaderComponent.prototype.closeNotificationsMenu = function () {
        this.isNotificationMenuOpen = false;
    };
    HeaderComponent.prototype.readNotification = function (notification) {
        var _this = this;
        this.notificationService
            .read(notification.id)
            .subscribe(function () {
            notification.read_at = (new Date()).toISOString();
            _this.gotoUserProfile(notification.data.user);
        });
    };
    //endregion
    //region Navigation
    HeaderComponent.prototype.gotoUserProfile = function (user) {
        var username = user.username;
        this.router.navigate(["/profile/" + username]);
        this.isNotificationMenuOpen = false;
    };
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
        notification_service_1.NotificationService,
        router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map