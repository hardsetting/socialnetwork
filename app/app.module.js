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
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_moment_1 = require("angular2-moment");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require('./app.component');
var search_bar_component_1 = require("./header/search-bar/search-bar.component");
var header_component_1 = require("./header/header.component");
var profile_component_1 = require("./profile/profile.component");
var user_service_1 = require("./shared/user.service");
var post_service_1 = require("./shared/post.service");
var new_post_component_1 = require("./profile/new-post/new-post.component");
var post_component_1 = require("./profile/post/post.component");
var angular2_jwt_1 = require('angular2-jwt');
var AppModule = (function () {
    function AppModule() {
    }
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
                header_component_1.HeaderComponent,
                search_bar_component_1.SearchBarComponent,
                profile_component_1.ProfileComponent,
                new_post_component_1.NewPostComponent,
                post_component_1.PostComponent
            ],
            providers: [
                angular2_jwt_1.provideAuth({
                    tokenGetter: function () { return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'; }
                }),
                //{ provide: Http, useClass: OAuthHttp, deps: [XHRBackend, RequestOptions] },
                user_service_1.UserService,
                post_service_1.PostService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map