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
var admin_service_1 = require("app/admin/services/admin.service");
var _ = require("lodash");
var DistributionComponent = (function () {
    function DistributionComponent(adminService) {
        this.adminService = adminService;
        this.legend = true;
        this.type = 'line';
    }
    DistributionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datasets = [
            { data: [], label: 'Degree' },
            { data: [], label: 'Zipfian reference' }
        ];
        this.labels = [];
        var step = 100;
        var zipf_s = 0.8;
        this.adminService
            .getDistribution(step)
            .subscribe(function (distribution) {
            // Generate a range from 0 to N with the distribution step
            var labels = _.range(0, distribution.length * step, step);
            var zipf_den = 0;
            for (var i = 1; i <= distribution.length * step; ++i) {
                zipf_den += 1.0 / Math.pow(i, zipf_s);
            }
            var zipfDistribution = labels.map(function (label) {
                var value = 1.0 / Math.pow(label + 1, zipf_s);
                return distribution[0] * value;
            });
            console.log(zipfDistribution);
            _this.datasets = [
                { data: distribution, label: 'Degree' },
                { data: zipfDistribution, label: 'Zipfian reference' }
            ];
            (_a = _this.labels).push.apply(_a, labels);
            var _a;
        });
        this.options = {
            responsive: true
        };
        this.colors = [
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
    };
    return DistributionComponent;
}());
DistributionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sn-admin-distribution',
        templateUrl: 'distribution.component.html',
        styleUrls: ['distribution.component.css']
    }),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], DistributionComponent);
exports.DistributionComponent = DistributionComponent;
//# sourceMappingURL=distribution.component.js.map