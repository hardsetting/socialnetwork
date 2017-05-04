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
var auth_http_service_1 = require("app/shared/auth-http.service");
var AdminService = (function () {
    function AdminService(authHttp) {
        this.authHttp = authHttp;
    }
    AdminService.prototype.getDistribution = function (step) {
        if (step === void 0) { step = 50; }
        return this.authHttp.get("/api/admin/distribution?step=" + step)
            .map(function (r) { return r.json(); });
    };
    AdminService.prototype.getMostActiveUsers = function (limit) {
        if (limit === void 0) { limit = 10; }
        return this.authHttp.get("/api/admin/activity?limit=" + limit)
            .map(function (r) { return r.json(); });
    };
    AdminService.prototype.getHubs = function (limit) {
        if (limit === void 0) { limit = 10; }
        return this.authHttp.get("/api/admin/hubs?limit=" + limit)
            .map(function (r) { return r.json(); });
    };
    AdminService.prototype.getCommunities = function (limit) {
        if (limit === void 0) { limit = 6; }
        return this.authHttp.get("/api/admin/communities?limit=" + limit)
            .map(function (r) { return r.json(); });
    };
    return AdminService;
}());
AdminService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_http_service_1.AuthHttp])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map