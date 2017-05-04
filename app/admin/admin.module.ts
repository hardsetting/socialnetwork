import {NgModule} from '@angular/core';

import {AdminRoutingModule} from "./admin-routing.module";
import {AdminComponent} from "./admin.component";
import {CommonModule} from "@angular/common";
import {DistributionComponent} from "app/admin/distribution/distribution.component";
import {ChartsModule} from "ng2-charts";
import {AdminService} from "app/admin/services/admin.service";
import {AdminHeaderComponent} from "app/admin/header/header.component";
import {DashboardComponent} from "app/admin/dashboard/dashboard.component";
import {SharedModule} from "app/shared/shared.module";
import {AdminSidebarComponent} from "app/admin/sidebar/sidebar.component";
import {HubsComponent} from "app/admin/hubs/hubs.component";
import {ActivityComponent} from "app/admin/activity/activity.component";
import {CommunitiesComponent} from "app/admin/communities/communities.component";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        ChartsModule,

        SharedModule
    ],
    declarations: [
        AdminHeaderComponent,
        AdminSidebarComponent,

        AdminComponent,
        DashboardComponent,
        DistributionComponent,
        ActivityComponent,
        CommunitiesComponent,
        HubsComponent
    ],
    providers: [
        AdminService
    ]
})
export class AdminModule { }