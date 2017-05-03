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
var user_service_1 = require("app/shared/user.service");
var SuggestionsComponent = (function () {
    function SuggestionsComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
    }
    SuggestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tmpUser;
        this.route.parent.params.switchMap(function (params) {
            return _this.userService.get(params['username']);
        }).flatMap(function (user) {
            tmpUser = user;
            return _this.userService.getSuggestions(user.id);
        }).subscribe(function (friends) {
            _this.user = tmpUser;
            _this.suggestions = friends;
        });
        this.shouldLoad = false;
    };
    //region Nagivation
    SuggestionsComponent.prototype.gotoUserProfile = function (user) {
        var username = user.username;
        this.router.navigate(["/profile/" + username]);
    };
    return SuggestionsComponent;
}());
SuggestionsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-suggestions',
        templateUrl: 'suggestions.component.html',
        styleUrls: ['../friends/friends.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService])
], SuggestionsComponent);
exports.SuggestionsComponent = SuggestionsComponent;
//# sourceMappingURL=suggestions.component.js.map