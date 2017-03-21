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
var user_1 = require("../../models/user");
var UserPicComponent = (function () {
    function UserPicComponent() {
    }
    return UserPicComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], UserPicComponent.prototype, "user", void 0);
UserPicComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-user-pic',
        templateUrl: 'user-pic.component.html',
        styleUrls: ['user-pic.component.css']
    })
], UserPicComponent);
exports.UserPicComponent = UserPicComponent;
//# sourceMappingURL=user-pic.component.js.map