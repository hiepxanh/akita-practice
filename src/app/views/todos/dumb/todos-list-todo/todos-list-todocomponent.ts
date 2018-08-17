import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../state/todo.model';
import { ID } from '@datorama/akita';
import { FormControl } from '@angular/forms';
import { TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';


@Component({
  selector: 'app-todos-list-todo',
  templateUrl: './todos-list-todo.component.html',
  styleUrls: ['./todos-list-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListTodoComponent implements OnInit,OnDestroy {
  @Input() todo: Todo;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<ID>();

  control: FormControl;
  constructor() { }

  ngOnInit() {
    this.control = new FormControl(this.todo.completed);
    this.control.valueChanges
    .pipe(untilDestroyed(this))
  }

  ngOnDestroy() {

  }

}
