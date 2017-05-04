import {NgModule} from '@angular/core';

import {AuthHttp} from "app/shared/auth-http.service";
import {AuthService} from "app/shared/auth.service";
import {UserService} from "app/shared/user.service";
import {VisibleDirective} from "app/shared/visible.directive";
import {UserPicComponent} from "app/shared/user-pic/user-pic.component";
import {ClickOutsideDirective} from "app/shared/click-outside.directive";
import {UserResolver} from "app/shared/user-resolver.service";

@NgModule({
    imports: [
    ],
    declarations: [
        UserPicComponent,
        ClickOutsideDirective,
        VisibleDirective
    ],
    providers: [
    ],
    exports: [
        UserPicComponent,
        ClickOutsideDirective,
        VisibleDirective
    ]
})
export class SharedModule { }