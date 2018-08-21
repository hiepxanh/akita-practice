import { Router } from "@angular/router";
import { SessionQuery } from "../login-state/sesstion.query";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthGuard {
    constructor(
        private router: Router,
        private sessionQuery: SessionQuery
    ) {}

    canActivate(): boolean {
        if (this.sessionQuery.isLoggedIn()) {
            return true;
        }
        this.router.navigateByUrl('login');
        return false;
    }
}