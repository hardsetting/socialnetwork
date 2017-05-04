import {Component} from '@angular/core';
import {User} from "app/models/user";
import {AdminService} from "app/admin/services/admin.service";

@Component({
    moduleId: module.id,
    selector: 'sn-admin-hubs',
    templateUrl: 'hubs.component.html',
    styleUrls: ['../activity/activity.component.css']
})
export class HubsComponent {
    private limit = 10;

    loading: boolean = true;
    hubs: {user: User, hubbiness: number}[];

    constructor(
        private adminService: AdminService
    ) {}

    ngOnInit(): void {
        this.adminService.getHubs(this.limit).subscribe(hubs => {
            this.hubs = hubs;
            this.loading = false;
        });
    }
}