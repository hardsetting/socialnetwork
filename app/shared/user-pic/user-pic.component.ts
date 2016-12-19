import {Component, Input} from '@angular/core';
import {User} from "../../models/user";

@Component({
    moduleId: module.id,
    selector: 'sn-user-pic',
    templateUrl: 'user-pic.component.html',
    styleUrls: ['user-pic.component.css']
})
export class UserPicComponent {
    @Input() user: User;
}