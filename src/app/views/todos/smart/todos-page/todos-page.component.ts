import { Component, OnInit } from '@angular/core';
import { VISIBILITY_FILTER, initialFilters } from '../../dumb/todos-filter/todos-filter.model';
import { Observable } from 'rxjs';
import { Todo } from '../../state/todo.model';
import { TodosQuery } from '../../state/todo.query';
import { TodosService } from '../../state/todos.service';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {
  todos$: Observable<Todo[]>;
  activeFilter$: Observable<VISIBILITY_FILTER>;
  selectAllDone$: Observable<boolean>;
  filters = initialFilters;


  constructor( 
    private todosQuery: TodosQuery,
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$;
    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
    this.selectAllDone$ = this.todosQuery.selectAllDone$;
  }

  add(input: HTMLInputElement) {
    this.todosService.add(input.value);
    input.value = '';
  }

  complete(todo: Todo) {
    this.todosService.complete(todo);
  }

  delete(id: ID) {
    this.todosService.delete(id);
  }

  changeFilter(filter: VISIBILITY_FILTER) {
    this.todosService.updateFilter(filter);
  }

}
