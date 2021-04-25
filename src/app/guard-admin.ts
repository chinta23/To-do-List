import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PaladionService } from './app.service';

@Injectable({ providedIn: 'root' })
export class OnlyLoggedInAdminsGuardService implements CanActivate{

    constructor(private paladionService: PaladionService,private router: Router) { };

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if (this.paladionService.isAdmin()) {
            return true;
        } else {
                // not logged in so redirect to login page with the return url
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                return false;
        }
    }

}
