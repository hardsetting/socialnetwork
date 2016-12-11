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
var core_1 = require('@angular/core');
var user_1 = require("../../user/user");
var post_service_1 = require("../../shared/post.service");
var NewPostComponent = (function () {
    function NewPostComponent(postService) {
        this.postService = postService;
        this.onPost = new core_1.EventEmitter();
    }
    NewPostComponent.prototype.create = function () {
        var _this = this;
        this.postService.create(this.user.id, this.content)
            .subscribe(function (post) { return _this.onPost.emit(post); });
        this.content = "";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], NewPostComponent.prototype, "user", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewPostComponent.prototype, "onPost", void 0);
    NewPostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sn-new-post',
            templateUrl: 'new-post.component.html',
            styleUrls: ['new-post.component.css'],
            providers: [post_service_1.PostService]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], NewPostComponent);
    return NewPostComponent;
}());
exports.NewPostComponent = NewPostComponent;
//# sourceMappingURL=new-post.component.js.map