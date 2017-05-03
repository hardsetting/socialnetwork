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
var user_1 = require("app/models/user");
var user_service_1 = require("app/shared/user.service");
var vex_1 = require("angular2-modal/plugins/vex");
var BtnFriendComponent = (function () {
    function BtnFriendComponent(userService, modal) {
        this.userService = userService;
        this.modal = modal;
    }
    BtnFriendComponent.prototype.ngOnInit = function () {
        this.loading = false;
    };
    BtnFriendComponent.prototype.cancel = function () {
        var _this = this;
        this.loading = true;
        this.userService
            .unfriend(this.user.id)
            .subscribe(function () {
            _this.user.friendship = null;
            _this.loading = false;
        }, function () {
            _this.loading = false;
        });
    };
    BtnFriendComponent.prototype.unfriend = function () {
        var _this = this;
        var modal = this.modal.confirm()
            .overlayClosesOnClick(true)
            .message("Are you sure you want to unfriend " + this.user.name + "?");
        modal.open()
            .then(function (dialog) { return dialog.result; })
            .then(function () {
            _this.cancel();
        });
    };
    BtnFriendComponent.prototype.befriend = function () {
        var _this = this;
        this.loading = true;
        this.userService
            .befriend(this.user.id)
            .subscribe(function (friendship) {
            _this.user.friendship = friendship;
            _this.loading = false;
        }, function () {
            _this.loading = false;
        });
    };
    return BtnFriendComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], BtnFriendComponent.prototype, "user", void 0);
BtnFriendComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-btn-friend',
        templateUrl: 'btn-friend.component.html',
        styleUrls: ['btn-friend.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        vex_1.Modal])
], BtnFriendComponent);
exports.BtnFriendComponent = BtnFriendComponent;
//# sourceMappingURL=btn-friend.component.js.map