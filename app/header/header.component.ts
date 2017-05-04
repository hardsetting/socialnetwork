import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {User} from "app/models/user";
import {AuthService} from "app/shared/auth.service";
import {Notification} from "app/models/notification";
import {NotificationService} from "app/shared/notification.service";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Component({
    moduleId: module.id,
    selector: 'sn-header',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    currentUser: User;

    isUserMenuOpen: boolean;
    isNotificationMenuOpen: boolean;

    notifications: Notification[];

    notificationCheckTimer: Subscription;

    get unread_notification_count(): number {
        if (this.notifications) {
            return this.notifications.filter(n => n.read_at == null).length;
        }
        return 0;
    }

    constructor(
        private authService: AuthService,
        private notificationService: NotificationService,
        private router: Router
    ) {}

    //region Lifecycle
    ngOnInit() {
        this.currentUser = this.authService.user.getValue();
        this.isUserMenuOpen = false;
        this.isNotificationMenuOpen = false;

        this.notificationCheckTimer = Observable.timer(0, 5000).switchMap(() => {
            return this.notificationService
                .getLatests();
        }).subscribe(notifications => {
            this.notifications = notifications;
        }, (err) => {
            console.warn('Could not fetch notifications.', err);
        });

    }

    ngOnDestroy() {
        this.notificationCheckTimer.unsubscribe();
    }
    //endregion

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

    readNotification(notification: Notification) {
        this.notificationService
            .read(notification.id)
            .subscribe(() => {
                notification.read_at = (new Date()).toISOString();
                this.gotoUserProfile(notification.data.user);
            });
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