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
var post_1 = require("../../post/post");
var PostComponent = (function () {
    function PostComponent() {
        this.showOptions = false;
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.toggleOptions = function () {
        this.showOptions = !this.showOptions;
    };
    PostComponent.prototype.edit = function () {
        this.toggleOptions();
    };
    PostComponent.prototype.delete = function () {
        this.toggleOptions();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', post_1.Post)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sn-post',
            templateUrl: 'post.component.html',
            styleUrls: ['post.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map