import { Injectable } from "@angular/core";
import { SidenavStore } from "./sidenav.store";

@Injectable({providedIn: 'root'})
export class SidenavService {
    constructor(private sidenavStore: SidenavStore) {
    }

    setSidenavState(status: boolean) {
        this.sidenavStore.updateSidenavState(status);
    }
}