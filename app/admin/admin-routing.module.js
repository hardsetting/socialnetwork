"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_component_1 = require("./admin.component");
var distribution_component_1 = require("app/admin/distribution/distribution.component");
var user_resolver_service_1 = require("app/shared/user-resolver.service");
var admin_guard_service_1 = require("app/admin/admin-guard.service");
var dashboard_component_1 = require("app/admin/dashboard/dashboard.component");
var shared_module_1 = require("app/shared/shared.module");
var hubs_component_1 = require("app/admin/hubs/hubs.component");
var activity_component_1 = require("app/admin/activity/activity.component");
var communities_component_1 = require("app/admin/communities/communities.component");
var routes = [
    { path: '',
        component: admin_component_1.AdminComponent,
        resolve: [user_resolver_service_1.UserResolver],
        canActivateChild: [admin_guard_service_1.AdminGuard],
        children: [
            { path: '', component: dashboard_component_1.DashboardComponent },
            { path: 'distribution', component: distribution_component_1.DistributionComponent },
            { path: 'hubs', component: hubs_component_1.HubsComponent },
            { path: 'communities', component: communities_component_1.CommunitiesComponent },
            { path: 'activity', component: activity_component_1.ActivityComponent }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes),
            shared_module_1.SharedModule
        ],
        exports: [router_1.RouterModule],
        providers: [
            admin_guard_service_1.AdminGuard,
            user_resolver_service_1.UserResolver
        ]
    })
], AdminRoutingModule);
exports.AdminRoutingModule = AdminRoutingModule;
//# sourceMappingURL=admin-routing.module.js.map