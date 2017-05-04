import {Component, OnInit} from '@angular/core';
import {AdminService} from "app/admin/services/admin.service";
import {User} from "app/models/user";

@Component({
    moduleId: module.id,
    selector: 'sn-admin-activity',
    templateUrl: 'activity.component.html',
    styleUrls: ['activity.component.css']
})
export class ActivityComponent implements OnInit {

    private limit = 10;

    loading: boolean = true;
    activity: {user: User, activity: number}[];

    constructor(
        private adminService: AdminService
    ) {}

    ngOnInit(): void {
        this.adminService.getMostActiveUsers(this.limit).subscribe(activity => {
            this.activity = activity;
            this.loading = false;
        });
    }

}