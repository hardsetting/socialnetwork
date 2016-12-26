import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {SiteComponent} from "./site/site.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SiteGuard} from "./site/site-guard.service";

const routes: Routes = [
    //{ path: '', redirectTo: '/profile/:', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: '',
        component: SiteComponent,
        canActivate: [SiteGuard],
        children: [
            { path: 'profile/:username', component: ProfileComponent },
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }