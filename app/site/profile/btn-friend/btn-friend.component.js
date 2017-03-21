"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BtnFriendComponent = (function () {
    function BtnFriendComponent(postService) {
        this.postService = postService;
        this.onPost = new core_1.EventEmitter();
        this.submitting = false;
    }
    BtnFriendComponent.prototype.create = function () {
        var _this = this;
        this.submitting = true;
        this.postService.create(this.content)
            .subscribe(function (post) {
            _this.onPost.emit(post);
            _this.submitting = false;
            // Reset new post content
            _this.content = "";
        }, function (err) {
            console.error("Couldn't post content.");
            _this.submitting = false;
        });
    };
    return BtnFriendComponent;
}());
__decorate([
    core_1.Input()
], BtnFriendComponent.prototype, "user", void 0);
__decorate([
    core_1.Output()
], BtnFriendComponent.prototype, "onPost", void 0);
BtnFriendComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-new-post',
        templateUrl: 'btn-friend.component.html',
        styleUrls: ['btn-friend.component.css']
    })
], BtnFriendComponent);
exports.BtnFriendComponent = BtnFriendComponent;
