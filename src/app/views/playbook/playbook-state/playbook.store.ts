import { Injectable } from "@angular/core";
import { PlaybookStateModule } from "../playbook-state/playbook-state.module";
import { StoreConfig, EntityState, ID, EntityStore, toggle } from "@datorama/akita";
import { PlayBook } from "@app/models/playbook";
import { TodosRoutingModule } from "../../todos/todos-routing.module";

export interface PlayBookState extends EntityState<PlayBook> {
    searchTerm: string;
    resultIds: ID[];
    collection: ID[];
}

const initialState = {
    searchTerm: '',
    resultIds: [],
    loading: false,
    collection: JSON.parse(localStorage.getItem('collection') as string) || []
}

@Injectable({providedIn: PlaybookStateModule})
@StoreConfig({name: 'playbook'})

export class PlaybookStore extends EntityStore<PlayBookState,PlayBook> {

    constructor(
    ) {
        super(initialState)
    }

    updateSearchTerm(searchTerm: string) {
        this.updateRoot({searchTerm})
    }

    updateResultIds(resultIds: ID[]) {
        this.updateRoot({resultIds})
    }

    updateCollection(id: ID) {
        this.updateRoot(
            state => ({collection: toggle(state.collection,id)}
        ));
    }
}
