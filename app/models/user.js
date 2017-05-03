"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friendship_1 = require("app/models/friendship");
var User = (function () {
    function User(data, currUserId) {
        Object.assign(this, data);
        if (this.friendship) {
            this.friendship = new friendship_1.Friendship(this.friendship, currUserId);
        }
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map