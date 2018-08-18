import { EntityState, StoreConfig, EntityStore } from "@datorama/akita";
import { Todo } from "./todo.model";
import { VISIBILITY_FILTER } from "../dumb/todos-filter/todos-filter.model";
import { Injectable } from "../../../../../node_modules/@angular/core";

export interface State extends EntityState<Todo> {
    ui: {
        filter: VISIBILITY_FILTER
    }
}

const initialState = {
    ui: { filter: VISIBILITY_FILTER.SHOW_ALL }
};

@Injectable({
    providedIn: 'root'
})

@StoreConfig({ name: 'todos' })

export class TodosStore extends EntityStore<State,Todo> {
    constructor() {
        super(initialState)
    }
}