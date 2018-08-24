import { Injectable } from "@angular/core";
import { InviteAppStateModule } from "./invite-app-state.module";
import { PeopleStore } from "./invite-app.store";
import { createPerson } from "@app/models/person";
import { ID, increment, decrement } from "@datorama/akita";

@Injectable({providedIn: InviteAppStateModule})

export class PeopleService {
    constructor(
        private peopleStore: PeopleStore
    ) {

    }

    addPerson(name: string) {
        this.peopleStore.add(createPerson(name));
    }

    removePerson(id: ID) {
        this.peopleStore.remove(id);
    }

    addGuest(id: ID) {
        this.peopleStore.update(id, person => ({
            guests: increment(person.guests)
        }))
    }

    removeGuest(id: ID) {
        this.peopleStore.update(id, person => ({
            guests: decrement(person.guests)
        }))
    }

    updateAttending(id: ID) {
        this.peopleStore.update(id, person => ({
            attending: !person.attending
        }))
    }

    updateFilter(filter: string) {
        this.peopleStore.updateFilter(filter);
    }
}