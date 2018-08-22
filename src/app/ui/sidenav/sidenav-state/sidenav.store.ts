import { StoreConfig, Store } from "@datorama/akita";
import { Injectable } from "@angular/core";
import { SidenavState } from '@app/models/sidenav';

const initialSidenavState  = {
    sidenavOpen: false
}


@Injectable({providedIn: 'root'})
@StoreConfig({name: 'layout'})
export class SidenavStore extends Store<SidenavState> {
    constructor() {
        super(initialSidenavState)
    }

    updateSidenavState(status: boolean) {
        this.update({sidenavOpen: status})
    }
}