"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friendship = (function () {
    function Friendship(data, user_id) {
        Object.assign(this, data);
        this.user_id = user_id;
    }
    Object.defineProperty(Friendship.prototype, "status", {
        get: function () {
            if (this.accepted_at != null) {
                return Friendship.STATUS_FRIENDS;
            }
            else if (this.user_id == this.requester_user_id) {
                return Friendship.STATUS_REQUESTED;
            }
            else if (this.user_id == this.requested_user_id) {
                return Friendship.STATUS_RECEIVED;
            }
            return Friendship.STATUS_NOT_FRIENDS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Friendship.prototype, "isFriend", {
        get: function () {
            return this.status == Friendship.STATUS_FRIENDS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Friendship.prototype, "isRequested", {
        get: function () {
            return this.status == Friendship.STATUS_REQUESTED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Friendship.prototype, "isReceived", {
        get: function () {
            return this.status == Friendship.STATUS_RECEIVED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Friendship.prototype, "isNotFriend", {
        get: function () {
            return this.status == Friendship.STATUS_NOT_FRIENDS;
        },
        enumerable: true,
        configurable: true
    });
    return Friendship;
}());
Friendship.STATUS_NOT_FRIENDS = 'not_friend';
Friendship.STATUS_REQUESTED = 'requested';
Friendship.STATUS_RECEIVED = 'received';
Friendship.STATUS_FRIENDS = 'friends';
exports.Friendship = Friendship;
//# sourceMappingURL=friendship.js.map