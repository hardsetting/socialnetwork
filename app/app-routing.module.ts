import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserResolver} from "app/shared/user-resolver.service";
import {LoginGuard} from "app/login/login-guard.service";
import {SiteGuard} from "app/site/site-guard.service";

import {LoginComponent} from "app/login/login.component";

import {SiteComponent} from "app/site/site.component";
import {HomeComponent} from "app/site/home.component";
import {ProfileComponent} from "app/site/profile/profile.component";
import {PostsComponent} from "app/site/profile/posts/posts.component";
import {FriendsComponent} from "app/site/profile/friends/friends.component";

import {PageNotFoundComponent} from "app/page-not-found/page-not-found.component";
import {SuggestionsComponent} from "app/site/profile/suggestions/suggestions.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate:[LoginGuard]},
    { path: '',
        component: SiteComponent,
        resolve: [UserResolver],
        canActivateChild: [SiteGuard],
        children: [
            { path: '', component: HomeComponent },
            { path: 'profile/:username',
                component: ProfileComponent,
                children: [
                    { path: '', component: PostsComponent },
                    { path: 'friends', component: FriendsComponent },
                    { path: 'suggestions', component: SuggestionsComponent }
                ]
            },

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