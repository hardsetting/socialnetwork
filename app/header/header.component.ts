import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {User} from "app/models/user";
import {AuthService} from "app/shared/auth.service";

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

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.currentUser = this.authService.user.getValue();
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

    //region Notification
    toggleNotifications() {

    }

    closeNotifications() {

    }
    //endregion

    gotoFriends() {
        let username = this.currentUser.username;
        this.router.navigate([`/profile/${username}/friends`]);
    }
}