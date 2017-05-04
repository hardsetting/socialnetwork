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
var admin_service_1 = require("app/admin/services/admin.service");
var HubsComponent = (function () {
    function HubsComponent(adminService) {
        this.adminService = adminService;
        this.limit = 10;
        this.loading = true;
    }
    HubsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getHubs(this.limit).subscribe(function (hubs) {
            _this.hubs = hubs;
            _this.loading = false;
        });
    };
    return HubsComponent;
}());
HubsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-admin-hubs',
        templateUrl: 'hubs.component.html',
        styleUrls: ['../activity/activity.component.css']
    }),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], HubsComponent);
exports.HubsComponent = HubsComponent;
//# sourceMappingURL=hubs.component.js.map