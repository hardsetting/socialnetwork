"use strict";
var Reaction = (function () {
    function Reaction(data) {
        Object.assign(this, data);
    }
    Object.defineProperty(Reaction.prototype, "isLike", {
        get: function () { return this.value == Reaction.VALUE_LIKE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reaction.prototype, "isLove", {
        get: function () { return this.value == Reaction.VALUE_LOVE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reaction.prototype, "isLaugh", {
        get: function () { return this.value == Reaction.VALUE_LAUGH; },
        enumerable: true,
        configurable: true
    });
    return Reaction;
}());
Reaction.VALUE_LIKE = 'like';
Reaction.VALUE_LAUGH = 'laugh';
Reaction.VALUE_LOVE = 'love';
exports.Reaction = Reaction;
//# sourceMappingURL=reaction.js.map