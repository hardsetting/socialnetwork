import {Component, OnInit, OnDestroy} from '@angular/core';

import {AuthService} from "app/shared/auth.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'sn-home',
    template: ''
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor(private authService: AuthService, private router: Router) {}

    private userSubscription;

    ngOnInit() {
        this.userSubscription = this.authService.user
            .subscribe(user => this.router.navigate(['/profile', user.username]));
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
}