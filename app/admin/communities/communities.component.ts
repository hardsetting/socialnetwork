import {Component, OnInit} from '@angular/core';
import {AdminService} from "app/admin/services/admin.service";
import {User} from "app/models/user";

@Component({
    moduleId: module.id,
    selector: 'sn-admin-communities',
    templateUrl: 'communities.component.html',
    styleUrls: ['communities.component.css']
})
export class CommunitiesComponent implements OnInit {

    private limit = 6;

    loading: boolean = true;
    communities: {user: User, friends: User[]}[];

    constructor(
        private adminService: AdminService
    ) {}

    ngOnInit(): void {
        this.adminService.getCommunities(this.limit).subscribe(communities => {
            this.communities = communities.sort((a, b) => b.friends.length - a.friends.length);
            this.loading = false;
        });
    }

}