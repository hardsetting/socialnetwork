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
var post_1 = require("app/models/post");
var post_service_1 = require("app/shared/post.service");
var user_1 = require("app/models/user");
var reaction_1 = require("app/models/reaction");
var auth_service_1 = require("app/shared/auth.service");
var vex_1 = require("angular2-modal/plugins/vex");
var PostComponent = (function () {
    function PostComponent(postService, authService, modal) {
        this.postService = postService;
        this.authService = authService;
        this.modal = modal;
        this.onDelete = new core_1.EventEmitter();
        this.onReact = new core_1.EventEmitter();
        this.showOptions = false;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.currUser = this.authService.user.getValue();
    };
    //region Post
    PostComponent.prototype.toggleOptions = function () {
        this.showOptions = !this.showOptions;
    };
    PostComponent.prototype.closeOptions = function () {
        this.showOptions = false;
    };
    PostComponent.prototype.edit = function () {
        var _this = this;
        var modal = this.modal.prompt()
            .overlayClosesOnClick(true)
            .message('Enter the edited post.')
            .placeholder('Post content');
        modal.open()
            .then(function (dialog) { return dialog.result; })
            .then(function (content) {
            _this.toggleOptions();
            _this.postService.edit(_this.post.id, content).subscribe(function () {
                _this.post.content = content;
            });
            _this.showOptions = false;
        }, function () { });
    };
    PostComponent.prototype.delete = function () {
        var _this = this;
        var modal = this.modal.confirm()
            .overlayClosesOnClick(true)
            .message('Are you sure you want to delete your message?');
        modal.open()
            .then(function (dialog) { return dialog.result; })
            .then(function () {
            _this.toggleOptions();
            _this.postService.delete(_this.post.id).subscribe(function () {
                _this.onDelete.emit(_this.post);
            });
            _this.showOptions = false;
        }, function () { });
    };
    Object.defineProperty(PostComponent.prototype, "reactions", {
        //endregion
        //region Reactions
        get: function () {
            return this.post.reactions;
        },
        enumerable: true,
        configurable: true
    });
    PostComponent.prototype.reactionsUsers = function (limit) {
        var names = this.post.reactions.map(function (reaction) { return reaction.user.name; });
        if (names.length <= limit && names.length > 1) {
            return names.slice(0, limit - 1).join(', ') + ' and ' + names.slice(limit - 1, 1);
        }
        else {
            return names.slice(0, limit).join(', ');
        }
    };
    Object.defineProperty(PostComponent.prototype, "currentReaction", {
        get: function () {
            var _this = this;
            return this.reactions.find(function (reaction) { return reaction.user_id == _this.authService.userId; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostComponent.prototype, "likesCount", {
        get: function () {
            return this.reactionCount(reaction_1.Reaction.VALUE_LIKE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostComponent.prototype, "loveCount", {
        get: function () {
            return this.reactionCount(reaction_1.Reaction.VALUE_LOVE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostComponent.prototype, "laughsCount", {
        get: function () {
            return this.reactionCount(reaction_1.Reaction.VALUE_LAUGH);
        },
        enumerable: true,
        configurable: true
    });
    PostComponent.prototype.like = function () {
        this.react(reaction_1.Reaction.VALUE_LIKE);
    };
    PostComponent.prototype.love = function () {
        this.react(reaction_1.Reaction.VALUE_LOVE);
    };
    PostComponent.prototype.laugh = function () {
        this.react(reaction_1.Reaction.VALUE_LAUGH);
    };
    PostComponent.prototype.reactionCount = function (value) {
        return this.post.reactions
            .filter(function (reaction) { return reaction.value == value; })
            .length;
    };
    PostComponent.prototype.react = function (value) {
        var _this = this;
        var isUndo = this.currentReaction && this.currentReaction.value == value;
        var response = isUndo ?
            this.postService.undoReact(this.post.id) :
            this.postService.react(this.post.id, value);
        response.subscribe(function () {
            _this.onReact.emit(_this.post);
        });
    };
    return PostComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], PostComponent.prototype, "user", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", post_1.Post)
], PostComponent.prototype, "post", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PostComponent.prototype, "onDelete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PostComponent.prototype, "onReact", void 0);
PostComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-post',
        templateUrl: 'post.component.html',
        styleUrls: ['post.component.css'],
    }),
    __metadata("design:paramtypes", [post_service_1.PostService,
        auth_service_1.AuthService,
        vex_1.Modal])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map