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
require("./rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular2_moment_1 = require("angular2-moment");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var search_bar_component_1 = require("./header/search-bar/search-bar.component");
var header_component_1 = require("./header/header.component");
var profile_component_1 = require("./site/profile/profile.component");
var user_service_1 = require("./shared/user.service");
var post_service_1 = require("./shared/post.service");
var new_post_component_1 = require("./site/profile/new-post/new-post.component");
var post_component_1 = require("./site/profile/post/post.component");
var auth_http_service_1 = require("./shared/auth-http.service");
var user_pic_component_1 = require("./shared/user-pic/user-pic.component");
var click_outside_directive_1 = require("./shared/click-outside.directive");
var auth_service_1 = require("./shared/auth.service");
var site_component_1 = require("./site/site.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var home_component_1 = require("./site/home.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular2_moment_1.MomentModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            site_component_1.SiteComponent,
            home_component_1.HomeComponent,
            login_component_1.LoginComponent,
            page_not_found_component_1.PageNotFoundComponent,
            header_component_1.HeaderComponent,
            search_bar_component_1.SearchBarComponent,
            profile_component_1.ProfileComponent,
            new_post_component_1.NewPostComponent,
            post_component_1.PostComponent,
            user_pic_component_1.UserPicComponent,
            click_outside_directive_1.ClickOutsideDirective
        ],
        providers: [
            auth_http_service_1.AuthHttp,
            auth_service_1.AuthService,
            user_service_1.UserService,
            post_service_1.PostService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map