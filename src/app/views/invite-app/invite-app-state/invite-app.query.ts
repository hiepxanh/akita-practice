import { QueryEntity } from "@datorama/akita";
import { PeopleState, PeopleStore } from "./invite-app.store";
import { Person } from "@app/models/person";
import { map, filter } from "rxjs/operators";
import { combineLatest } from "rxjs";
import { Injectable } from "@angular/core";
import { InviteAppStateModule } from "./invite-app-state.module";
@Injectable({providedIn: InviteAppStateModule})
export class PeopleQuery extends QueryEntity<PeopleState, Person> {
    constructor(
        protected store: PeopleStore
    ) {
        super(store)
    }
    
    selectFilter$ = this.select(state => state.ui.filter);
    selectPeople$ = combineLatest(this.selectFilter$,this.selectAll()).pipe(
        map(([filter,people]) => ({
            invited:people.length,
            invitees: this.partyFilter(filter,people),
            RSVPed: this.partyFilter('SHOW_ATTENDING',people).length,
            totalWithGuests: this.partyFilter('SHOW_ATTENDING',people).reduce((acc,curr) => acc + curr.guests+1,0)
        }))
    )

    partyFilter(filter:string, people: Person[]) {
        switch (filter) {
            case 'SHOW_ATTENDING':
                return people.filter(person => person.attending)
            case 'SHOW_ALL':
                return people;
            case 'SHOW_WITH_GUESTS':
                return people.filter(person => person.attending && person.guests)
        }
    }
}