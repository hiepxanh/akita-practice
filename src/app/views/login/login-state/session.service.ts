import { Injectable } from "@angular/core";
import { SessionDataService } from "./session-data.service";
import { tap } from "rxjs/operators";
import { SessionStore } from "./login.store";

@Injectable({providedIn: 'root'})

export class SessionService {
    constructor(
        private authStore: SessionStore,
        private authDataService: SessionDataService
    ) {

    }

    login(credentials) {
        return this.authDataService.login(credentials) 
        .pipe(
            tap(session => this.authStore.login(session))
        )
    }

    logout() {
        this.authStore.logout();
    }
}