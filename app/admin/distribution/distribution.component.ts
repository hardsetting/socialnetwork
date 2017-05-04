import {Component, OnInit} from '@angular/core';
import {AdminService} from "app/admin/services/admin.service";

import * as _ from "lodash";

@Component({
    moduleId: module.id,
    selector: 'sn-admin-distribution',
    templateUrl: 'distribution.component.html',
    styleUrls: ['distribution.component.css']
})
export class DistributionComponent implements OnInit {

    datasets: any[];
    labels: any[];
    options: any;
    colors: any;
    legend: boolean = true;
    type: string = 'line';

    constructor(
        private adminService: AdminService
    ) {}

    ngOnInit(): void {

        this.datasets = [
            {data:[], label: 'Degree'},
            {data:[], label: 'Zipfian reference'}
        ];
        this.labels = [];

        let step = 100;
        let zipf_s = 0.8;

        this.adminService
            .getDistribution(step)
            .subscribe(distribution => {
                // Generate a range from 0 to N with the distribution step
                let labels = _.range(0, distribution.length*step, step);

                let zipf_den = 0;
                for (let i=1; i<= distribution.length*step; ++i) {
                    zipf_den += 1.0 / Math.pow(i, zipf_s);
                }

                let zipfDistribution = labels.map(label => {
                    let value = 1.0 / Math.pow(label+1, zipf_s);
                    return distribution[0] * value;
                });

                console.log(zipfDistribution);

                this.datasets = [
                    {data: distribution, label: 'Degree'},
                    {data: zipfDistribution, label: 'Zipfian reference'}
                    ];
                this.labels.push(...labels);
            });

        this.options = {
            responsive: true
        };

        this.colors = [
            { // dark grey
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            { // grey
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
    }

}