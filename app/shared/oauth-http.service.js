"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var OAuthHttp = (function (_super) {
    __extends(OAuthHttp, _super);
    function OAuthHttp(backend, options) {
        return _super.call(this, backend, options) || this;
    }
    OAuthHttp.prototype.request = function (url, options) {
        options = options ? options : {};
        if (!options.headers) {
            options.headers = new http_1.Headers();
        }
        options.headers.append('Authorization', 'Bearer b994befa-9646-4fbb-83dc-58a33dd28d0a');
        console.log(options);
        console.log('requesting');
        return _super.prototype.request.call(this, url, options);
    };
    OAuthHttp.prototype.get = function (url, options) {
        console.log('getting');
        return _super.prototype.get.call(this, url, options);
    };
    return OAuthHttp;
}(http_1.Http));
OAuthHttp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.XHRBackend, http_1.RequestOptions])
], OAuthHttp);
exports.OAuthHttp = OAuthHttp;
//# sourceMappingURL=oauth-http.service.js.map