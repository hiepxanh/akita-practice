import { Injectable } from "@angular/core";
import { PlaybookStateModule } from "./playbook-state.module";
import { PlayBookState, PlaybookStore } from "../playbook-state/playbook.store";
import { PlayBook } from "@app/models/playbook";
import { QueryEntity, ID } from "@datorama/akita";
import { map } from "rxjs/operators";

@Injectable({providedIn: PlaybookStateModule})

export class PlayBookQuery extends QueryEntity<PlayBookState,PlayBook> {
    constructor(
        protected store: PlaybookStore,

    ) {
        super(store);
    }

    selectSearchTerm$ = this.select(state => state.searchTerm);
    selectResultIds$ = this.select(state => state.resultIds);
    selectCollection$ = this.select(state => state.collection);

    isInCollection$ = this.selectCollection$.pipe(
        map(ids => ids.includes(this.getActiveId()) == true) 
    )

    get getSearchTerm():string {
        return this.getSnapshot().searchTerm;
    }

    get getCollection(): ID[] {
        return this.getSnapshot().collection;
    }

    get nonCollectionBooks() :string[] {
        return this.getAll({
            filterBy: ({id}) => this.getCollection.includes(id) == false
        }).map(({id}) => id)
    }
}