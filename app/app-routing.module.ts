import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
    //{ path: '', redirectTo: '/profile/:', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'profile/:id',  component: ProfileComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }