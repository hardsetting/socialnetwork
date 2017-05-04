"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var admin_routing_module_1 = require("./admin-routing.module");
var admin_component_1 = require("./admin.component");
var common_1 = require("@angular/common");
var distribution_component_1 = require("app/admin/distribution/distribution.component");
var ng2_charts_1 = require("ng2-charts");
var admin_service_1 = require("app/admin/services/admin.service");
var header_component_1 = require("app/admin/header/header.component");
var dashboard_component_1 = require("app/admin/dashboard/dashboard.component");
var shared_module_1 = require("app/shared/shared.module");
var sidebar_component_1 = require("app/admin/sidebar/sidebar.component");
var hubs_component_1 = require("app/admin/hubs/hubs.component");
var activity_component_1 = require("app/admin/activity/activity.component");
var communities_component_1 = require("app/admin/communities/communities.component");
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            admin_routing_module_1.AdminRoutingModule,
            ng2_charts_1.ChartsModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            header_component_1.AdminHeaderComponent,
            sidebar_component_1.AdminSidebarComponent,
            admin_component_1.AdminComponent,
            dashboard_component_1.DashboardComponent,
            distribution_component_1.DistributionComponent,
            activity_component_1.ActivityComponent,
            communities_component_1.CommunitiesComponent,
            hubs_component_1.HubsComponent
        ],
        providers: [
            admin_service_1.AdminService
        ]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map