import {Injectable}     from '@angular/core';
import {CanActivate, Router, CanActivateChild} from '@angular/router';
import {AuthService} from "../shared/auth.service";

@Injectable()
export class SiteGuard implements CanActivate, CanActivateChild {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild(): boolean {
        return this.canActivate();
    }
}