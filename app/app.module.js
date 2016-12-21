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
var profile_component_1 = require("./profile/profile.component");
var user_service_1 = require("./shared/user.service");
var post_service_1 = require("./shared/post.service");
var new_post_component_1 = require("./profile/new-post/new-post.component");
var post_component_1 = require("./profile/post/post.component");
var auth_http_service_1 = require("./shared/auth-http.service");
var router_1 = require("@angular/router");
var user_pic_component_1 = require("./shared/user-pic/user-pic.component");
var click_outside_directive_1 = require("./shared/click-outside.directive");
var auth_service_1 = require("./shared/auth.service");
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
            app_routing_module_1.AppRoutingModule,
            angular2_moment_1.MomentModule
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            header_component_1.HeaderComponent,
            search_bar_component_1.SearchBarComponent,
            profile_component_1.ProfileComponent,
            new_post_component_1.NewPostComponent,
            post_component_1.PostComponent,
            user_pic_component_1.UserPicComponent,
            click_outside_directive_1.ClickOutsideDirective
        ],
        providers: [
            auth_service_1.AuthService,
            { provide: http_1.Http, useClass: auth_http_service_1.AuthHttp, deps: [http_1.XHRBackend, http_1.RequestOptions, router_1.Router, auth_service_1.AuthService] },
            user_service_1.UserService,
            post_service_1.PostService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map