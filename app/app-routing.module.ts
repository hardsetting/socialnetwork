import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./site/profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {SiteComponent} from "./site/site.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SiteGuard} from "./site/site-guard.service";
import {LoginGuard} from "./login/login-guard.service";
import {UserResolver} from "./shared/user-resolver.service";
import {HomeComponent} from "./site/home.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate:[LoginGuard]},
    { path: '',
        component: SiteComponent,
        resolve: [UserResolver],
        canActivateChild: [SiteGuard],
        children: [
            { path: '', component: HomeComponent },
            { path: 'profile/:username', component: ProfileComponent },
        ]
    },
    { path: 'admin', resolve: [UserResolver], loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        SiteGuard,
        LoginGuard,
        UserResolver
    ]
})
export class AppRoutingModule { }