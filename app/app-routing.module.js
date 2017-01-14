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
var router_1 = require("@angular/router");
var profile_component_1 = require("./site/profile/profile.component");
var login_component_1 = require("./login/login.component");
var site_component_1 = require("./site/site.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var site_guard_service_1 = require("./site/site-guard.service");
var login_guard_service_1 = require("./login/login-guard.service");
var user_resolver_service_1 = require("./shared/user-resolver.service");
var home_component_1 = require("./site/home.component");
var routes = [
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [login_guard_service_1.LoginGuard] },
    { path: '',
        component: site_component_1.SiteComponent,
        resolve: [user_resolver_service_1.UserResolver],
        canActivateChild: [site_guard_service_1.SiteGuard],
        children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'profile/:username', component: profile_component_1.ProfileComponent },
        ]
    },
    { path: 'admin', resolve: [user_resolver_service_1.UserResolver], loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
        providers: [
            site_guard_service_1.SiteGuard,
            login_guard_service_1.LoginGuard,
            user_resolver_service_1.UserResolver
        ]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map