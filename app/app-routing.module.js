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
var user_resolver_service_1 = require("app/shared/user-resolver.service");
var login_guard_service_1 = require("app/login/login-guard.service");
var site_guard_service_1 = require("app/site/site-guard.service");
var login_component_1 = require("app/login/login.component");
var site_component_1 = require("app/site/site.component");
var home_component_1 = require("app/site/home.component");
var profile_component_1 = require("app/site/profile/profile.component");
var posts_component_1 = require("app/site/profile/posts/posts.component");
var friends_component_1 = require("app/site/profile/friends/friends.component");
var page_not_found_component_1 = require("app/page-not-found/page-not-found.component");
var suggestions_component_1 = require("app/site/profile/suggestions/suggestions.component");
var shared_module_1 = require("app/shared/shared.module");
var routes = [
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [login_guard_service_1.LoginGuard] },
    { path: '',
        component: site_component_1.SiteComponent,
        resolve: [user_resolver_service_1.UserResolver],
        canActivateChild: [site_guard_service_1.SiteGuard],
        children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'profile/:username',
                component: profile_component_1.ProfileComponent,
                children: [
                    { path: '', component: posts_component_1.PostsComponent },
                    { path: 'friends', component: friends_component_1.FriendsComponent },
                    { path: 'suggestions', component: suggestions_component_1.SuggestionsComponent }
                ]
            },
        ]
    },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes),
            shared_module_1.SharedModule
        ],
        exports: [router_1.RouterModule],
        providers: [
            site_guard_service_1.SiteGuard,
            login_guard_service_1.LoginGuard,
            user_resolver_service_1.UserResolver
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map