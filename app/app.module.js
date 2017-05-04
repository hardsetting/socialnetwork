"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular2_moment_1 = require("angular2-moment");
var app_routing_module_1 = require("app/app-routing.module");
var app_component_1 = require("app/app.component");
var login_component_1 = require("app/login/login.component");
var search_bar_component_1 = require("app/header/search-bar/search-bar.component");
var header_component_1 = require("app/header/header.component");
var profile_component_1 = require("app/site/profile/profile.component");
var post_service_1 = require("app/shared/post.service");
var new_post_component_1 = require("app/site/profile/posts/new-post/new-post.component");
var post_component_1 = require("app/site/profile/posts/post/post.component");
var site_component_1 = require("app/site/site.component");
var page_not_found_component_1 = require("app/page-not-found/page-not-found.component");
var home_component_1 = require("app/site/home.component");
var angular2_modal_1 = require("angular2-modal");
var vex_1 = require("angular2-modal/plugins/vex");
var friends_component_1 = require("app/site/profile/friends/friends.component");
var posts_component_1 = require("app/site/profile/posts/posts.component");
var friends_search_pipe_1 = require("app/site/profile/friends-search.pipe");
var suggestions_component_1 = require("app/site/profile/suggestions/suggestions.component");
var btn_friend_component_1 = require("app/shared/btn-friend/btn-friend.component");
var notification_service_1 = require("app/shared/notification.service");
var shared_module_1 = require("app/shared/shared.module");
var user_service_1 = require("app/shared/user.service");
var auth_service_1 = require("app/shared/auth.service");
var auth_http_service_1 = require("app/shared/auth-http.service");
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
            angular2_modal_1.ModalModule.forRoot(),
            vex_1.VexModalModule,
            shared_module_1.SharedModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            site_component_1.SiteComponent,
            home_component_1.HomeComponent,
            posts_component_1.PostsComponent,
            friends_component_1.FriendsComponent,
            page_not_found_component_1.PageNotFoundComponent,
            header_component_1.HeaderComponent,
            search_bar_component_1.SearchBarComponent,
            profile_component_1.ProfileComponent,
            new_post_component_1.NewPostComponent,
            post_component_1.PostComponent,
            suggestions_component_1.SuggestionsComponent,
            btn_friend_component_1.BtnFriendComponent,
            friends_search_pipe_1.FriendsSearchPipe
        ],
        providers: [
            auth_http_service_1.AuthHttp,
            auth_service_1.AuthService,
            user_service_1.UserService,
            post_service_1.PostService,
            notification_service_1.NotificationService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map