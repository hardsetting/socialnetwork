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
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var Observable_1 = require("rxjs/Observable");
var user_search_service_1 = require("../../shared/user-search.service");
var router_1 = require("@angular/router");
var SearchBarComponent = (function () {
    function SearchBarComponent(userSearchService, router) {
        this.userSearchService = userSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged() // ignore if next search is same as previous
            .switchMap(function (term) { return term ? _this.userSearchService.search(term) : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    SearchBarComponent.prototype.search = function () {
        this.searchTerms.next(this.searchTerm);
    };
    SearchBarComponent.prototype.gotoUser = function (user) {
        this.searchTerm = '';
        this.router.navigate(['/profile', user.username]);
    };
    return SearchBarComponent;
}());
SearchBarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-search-bar',
        templateUrl: 'search-bar.component.html',
        styleUrls: ['search-bar.component.css'],
        providers: [user_search_service_1.UserSearchService]
    }),
    __metadata("design:paramtypes", [user_search_service_1.UserSearchService,
        router_1.Router])
], SearchBarComponent);
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=search-bar.component.js.map