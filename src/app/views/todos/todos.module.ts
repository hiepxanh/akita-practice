import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosPageComponent } from './smart/todos-page/todos-page.component';
import { TodosListComponent } from './dumb/todos-list/todos-list.component';
import { TodosFilterComponent } from './dumb/todos-filter/todos-filter.component';
import { TodosListTodoComponent } from './dumb/todos-list-todo/todos-list-todocomponent';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  declarations: [TodosPageComponent, TodosListComponent, TodosListTodoComponent, TodosFilterComponent]
})
export class TodosModule { }
