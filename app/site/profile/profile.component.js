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
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var vex_1 = require("angular2-modal/plugins/vex");
var auth_service_1 = require("app/shared/auth.service");
var user_service_1 = require("app/shared/user.service");
var ProfileComponent = (function () {
    function ProfileComponent(route, router, authService, userService, modal) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.modal = modal;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.user.getValue();
        this.route.params.switchMap(function (params) {
            return Observable_1.Observable.forkJoin([
                _this.userService.get(params['username']),
                _this.userService.getPosts(params['username'])
            ]);
        }).subscribe(function (results) {
            _this.user = results[0];
            _this.posts = results[1];
        });
    };
    ProfileComponent.prototype.gotoTimeline = function () {
        var username = this.user.username;
        this.router.navigate(["/profile/" + username]);
    };
    ProfileComponent.prototype.friend = function () {
        this.modal.alert()
            .message('Hello world')
            .open();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-profile',
        templateUrl: 'profile.component.html',
        styleUrls: ['profile.component.css']
        //providers: [Modal]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        auth_service_1.AuthService,
        user_service_1.UserService,
        vex_1.Modal])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map