import { Injectable }     from '@angular/core';
import {CanActivate, Router}    from '@angular/router';
import {AuthService} from "../shared/auth.service";

@Injectable()
export class SiteGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}