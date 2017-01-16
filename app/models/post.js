"use strict";
var reaction_1 = require("app/models/reaction");
var Post = (function () {
    function Post(data) {
        if (data instanceof Object) {
            Object.assign(this, data);
            if (this.reactions instanceof Array) {
                this.reactions = this.reactions.map(function (reaction) { return new reaction_1.Reaction(reaction); });
            }
        }
        else {
            this.content = data;
        }
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map