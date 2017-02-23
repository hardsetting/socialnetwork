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
var VisibleDirective = (function () {
    function VisibleDirective(elementRef) {
        this.elementRef = elementRef;
        this.visible = new core_1.EventEmitter();
        this.wasVisible = this.isVisible();
    }
    VisibleDirective.prototype.onScroll = function () {
        var isVisible = this.isVisible();
        if (!this.wasVisible && isVisible) {
            this.visible.emit();
        }
        this.wasVisible = isVisible;
    };
    VisibleDirective.prototype.isVisible = function (threshold, mode) {
        threshold = threshold || 0;
        mode = mode || 'visible'; // above|below|visible
        var rect = this.elementRef.nativeElement.getBoundingClientRect();
        var viewHeight = window.innerHeight;
        var above = rect.bottom - threshold < 0;
        var below = rect.top - viewHeight + threshold >= 0;
        return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
    };
    return VisibleDirective;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VisibleDirective.prototype, "visible", void 0);
__decorate([
    core_1.HostListener('document:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VisibleDirective.prototype, "onScroll", null);
VisibleDirective = __decorate([
    core_1.Directive({
        selector: '[visible]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], VisibleDirective);
exports.VisibleDirective = VisibleDirective;
//# sourceMappingURL=visible.directive.js.map