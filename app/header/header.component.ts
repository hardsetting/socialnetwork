import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {User} from "app/models/user";
import {AuthService} from "app/shared/auth.service";
import {Notification} from "app/models/notification";
import {NotificationService} from "app/shared/notification.service";
import {Observable} from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: 'sn-header',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
    currentUser: User;

    isUserMenuOpen: boolean;
    isNotificationMenuOpen: boolean;

    notifications: Notification[];

    constructor(
        private authService: AuthService,
        private notificationService: NotificationService,
        private router: Router
    ) {}

    ngOnInit() {
        this.currentUser = this.authService.user.getValue();
        this.isUserMenuOpen = false;
        this.isNotificationMenuOpen = false;

        this.notificationService
            .getLatests()
            .subscribe(notifications => {
                this.notifications = notifications;
            }, (err) => {
                console.warn('Could not fetch notifications.', err);
            });

    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    //region UserMenu
    toggleUserMenu() {
        this.isUserMenuOpen = !this.isUserMenuOpen;
    }

    closeUserMenu() {
        console.log('closeUserMenu');
        this.isUserMenuOpen = false;
    }
    //endregion

    //region NotificationsMenu
    toggleNotificationsMenu() {
        this.isNotificationMenuOpen = !this.isNotificationMenuOpen;
    }

    closeNotificationsMenu() {
        this.isNotificationMenuOpen = false;
    }


    //endregion

    //region Navigation
    gotoUserProfile(user: User) {
        let username = user.username;
        this.router.navigate([`/profile/${username}`]);
        this.isNotificationMenuOpen = false;
    }

    gotoFriends() {
        let username = this.currentUser.username;
        this.router.navigate([`/profile/${username}/friends`]);
    }

    gotoSuggestions() {
        let username = this.currentUser.username;
        this.router.navigate([`/profile/${username}/suggestions`]);
    }
    //endreigon
}