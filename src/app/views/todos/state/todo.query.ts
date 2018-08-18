import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { State, TodosStore } from "./todos.store";
import { Todo } from "./todo.model";
import { combineLatest } from "node_modules/rxjs";
import { map } from 'rxjs/operators';
import { VISIBILITY_FILTER } from "../dumb/todos-filter/todos-filter.model";
@Injectable({
    providedIn: 'root'
})

export class TodosQuery extends QueryEntity<State, Todo> {
    selectVisibilityFilter$ = this.select(state => state.ui.filter);

    selectVisibleTodos$ = combineLatest(
        this.selectVisibilityFilter$,
        this.selectAll(),
        this.getVisibleTodos
    );

    selectAllDone$ = this.selectCount(todo => todo.completed)
    .pipe(
        map(count => {
            return this.getCount() > 0 && count === this.getCount();
        })
    )

    constructor(protected store: TodosStore) {
        super(store);
    }

    private getVisibleTodos(filter, todos): Todo[] {
        switch (filter) {
            case VISIBILITY_FILTER.SHOW_COMPLETED:
                return todos.filter(t => t.completed)
            case VISIBILITY_FILTER.SHOW_ACTIVE:
                return todos.filter(t => !t.completed)
            default:
                return todos;
        }
    }
}