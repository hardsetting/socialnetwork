import {Injectable}     from '@angular/core';
import {CanActivate, Router, CanActivateChild} from '@angular/router';
import {AuthService} from "../shared/auth.service";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(): boolean {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/profile']);
            return false;
        }

        return true;
    }
}