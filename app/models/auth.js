"use strict";
var Auth = (function () {
    function Auth() {
    }
    Object.defineProperty(Auth, "token", {
        get: function () {
            return localStorage.getItem(Auth.KEY_TOKEN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auth, "refreshToken", {
        get: function () {
            return localStorage.getItem(Auth.KEY_REFRESH_TOKEN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auth, "expiresAt", {
        get: function () {
            return localStorage.getItem(Auth.KEY_EXPIRES_AT);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auth, "data", {
        set: function (data) {
            localStorage.setItem(Auth.KEY_TOKEN, data.token);
            localStorage.setItem(Auth.KEY_REFRESH_TOKEN, data.refresh_token);
            localStorage.setItem(Auth.KEY_EXPIRES_AT, data.expires_at);
        },
        enumerable: true,
        configurable: true
    });
    return Auth;
}());
Auth.KEY_TOKEN = 'auth_token';
Auth.KEY_REFRESH_TOKEN = 'auth_refresh_token';
Auth.KEY_EXPIRES_AT = 'auth_expires_at';
exports.Auth = Auth;
//# sourceMappingURL=auth.js.map