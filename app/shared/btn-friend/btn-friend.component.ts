import {Component, Input, OnInit} from '@angular/core';
import {User} from "app/models/user";
import {UserService} from "app/shared/user.service";
import {Modal} from "angular2-modal/plugins/vex";

@Component({
    moduleId: module.id,
    selector: 'sn-btn-friend',
    templateUrl: 'btn-friend.component.html',
    styleUrls: ['btn-friend.component.css']
})
export class BtnFriendComponent implements OnInit {

    @Input() user: User;

    loading: boolean;

    constructor(
        private userService: UserService,
        private modal: Modal
    ) {}

    ngOnInit(): void {
        this.loading = false;
    }

    cancel() {
        this.loading = true;

        this.userService
            .unfriend(this.user.id)
            .subscribe(() => {
                this.user.friendship = null;
                this.loading = false;
            }, () => {
                this.loading = false;
            });
    }

    unfriend() {
        let modal = this.modal.confirm()
            .overlayClosesOnClick(true)
            .message(`Are you sure you want to unfriend ${this.user.name}?`);

        modal.open()
            .then(dialog => dialog.result)
            .then(() => {
                this.cancel();
            });
    }

    befriend() {
        this.loading = true;

        this.userService
            .befriend(this.user.id)
            .subscribe((friendship) => {
                this.user.friendship = friendship;
                this.loading = false;
            }, () => {
                this.loading = false;
            });
    }
}