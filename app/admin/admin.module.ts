import {NgModule} from '@angular/core';

import {AdminRoutingModule} from "./admin-routing.module";
import {AdminComponent} from "./admin.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent
    ],
    providers: [
    ]
})
export class AdminModule { }