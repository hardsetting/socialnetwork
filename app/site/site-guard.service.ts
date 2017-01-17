import {Injectable}     from '@angular/core';
import {CanActivate, Router, CanActivateChild} from '@angular/router';
import {AuthService} from "../shared/auth.service";

import {Observable} from "rxjs/Observable";

@Injectable()
export class SiteGuard implements CanActivate, CanActivateChild {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(): Observable<boolean>|boolean {

        if (this.authService.isLoggedIn()) {
            return true;
        }

        let refreshCheck: Observable<boolean>;
        if (this.authService.refreshToken) {
            refreshCheck = this.authService.refresh()
                .map(() => this.authService.isLoggedIn())
                .catch(() => {
                    this.authService.logout();
                    return Observable.of(false)
                })
        } else {
            refreshCheck = Observable.of(false);
        }

        return refreshCheck.do(isLoggedIn => {
            if (!isLoggedIn) {
                this.router.navigate(['/login']);
            }
        });
    }

    canActivateChild(): Observable<boolean>|boolean {
        return this.canActivate();
    }
}