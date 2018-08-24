import { Person } from "@app/models/person";
import { Injectable } from "@angular/core";
import { StoreConfig, EntityState, EntityStore } from "@datorama/akita";
import { InviteAppStateModule } from "./invite-app-state.module";

export interface PeopleState extends EntityState<Person> {
    ui: {
        filter: string;
    }
}

const initialState = {
    ui: {
        filter: 'SHOW_ALL'
    }
}

@Injectable({providedIn: InviteAppStateModule})
@StoreConfig({name: 'people'})

export class PeopleStore extends EntityStore<PeopleState, Person> {
    constructor() {
        super(initialState)
    }

    updateFilter(filter: string) {
        this.updateRoot({ui: {filter}})
    }
}