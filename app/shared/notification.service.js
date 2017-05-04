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
var notification_1 = require("../models/notification");
var auth_http_service_1 = require("./auth-http.service");
var NotificationService = (function () {
    function NotificationService(authHttp) {
        this.authHttp = authHttp;
    }
    NotificationService.prototype.getLatests = function (limit) {
        if (limit === void 0) { limit = 6; }
        return this.authHttp
            .get("api/notifications?limit=" + limit)
            .map(function (r) { return r.json(); })
            .map(function (notifications) { return notifications.map(function (notification) { return new notification_1.Notification(notification); }); });
    };
    NotificationService.prototype.read = function (id) {
        return this.authHttp
            .patch("api/notifications/" + id)
            .map(function () { return null; });
    };
    return NotificationService;
}());
NotificationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_http_service_1.AuthHttp])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map