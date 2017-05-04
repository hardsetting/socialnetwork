import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {DistributionComponent} from "app/admin/distribution/distribution.component";
import {UserResolver} from "app/shared/user-resolver.service";
import {AdminGuard} from "app/admin/admin-guard.service";
import {DashboardComponent} from "app/admin/dashboard/dashboard.component";
import {SharedModule} from "app/shared/shared.module";
import {HubsComponent} from "app/admin/hubs/hubs.component";
import {ActivityComponent} from "app/admin/activity/activity.component";
import {CommunitiesComponent} from "app/admin/communities/communities.component";

const routes: Routes = [
    { path: '',
        component: AdminComponent,
        resolve: [UserResolver],
        canActivateChild: [AdminGuard],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'distribution', component: DistributionComponent},
            { path: 'hubs', component: HubsComponent},
            { path: 'communities', component: CommunitiesComponent},
            { path: 'activity', component: ActivityComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [RouterModule],
    providers: [
        AdminGuard,
        UserResolver
    ]
})
export class AdminRoutingModule { }