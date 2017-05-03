"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FriendsSearchPipe = (function () {
    function FriendsSearchPipe() {
    }
    FriendsSearchPipe.prototype.transform = function (value, query) {
        if (!Array.isArray(value) || (typeof query !== "string")) {
            return value;
        }
        var lowerQuery = query.toLowerCase();
        return value.filter(function (user) {
            if (user.surname) {
                var lowerName = user.name.toLowerCase();
                var lowerSurname = user.surname.toLowerCase();
                var fullName = lowerName + " " + lowerSurname;
                return fullName.match(lowerQuery) || lowerName.match(lowerQuery) || lowerSurname.match(lowerQuery);
            }
            else {
                var lowerName = user.name.toLowerCase();
                return lowerName.match(lowerQuery);
            }
        });
    };
    return FriendsSearchPipe;
}());
FriendsSearchPipe = __decorate([
    core_1.Pipe({ name: 'friendsSearch' })
], FriendsSearchPipe);
exports.FriendsSearchPipe = FriendsSearchPipe;
//# sourceMappingURL=friends-search.pipe.js.map