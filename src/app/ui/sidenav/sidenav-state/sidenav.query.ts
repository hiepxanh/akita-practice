import { Injectable } from "@angular/core";
import { SidenavState } from "@app/models/sidenav";
import { Query } from "@datorama/akita";
import { SidenavStore } from "./sidenav.store";


@Injectable({providedIn: 'root'})
export class SidenavQuery extends Query<SidenavState> {
    sideNavOpen$ = this.select(state => state.sidenavOpen);

    constructor(protected store: SidenavStore) {
        super(store)
    }
}