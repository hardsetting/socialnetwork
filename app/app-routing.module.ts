import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    //{ path: '', redirectTo: '/', pathMatch: 'full' },
    /*{ path: 'dashboard',  component: DashboardComponent },
    { path: 'heroes/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent }*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }