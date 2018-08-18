import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { untilDestroyed, TakeUntilDestroy } from 'ngx-take-until-destroy';
import { VISIBILITY_FILTER, TodoFilter } from './todos-filter.model';
@TakeUntilDestroy()
@Component({
  selector: 'app-todos-filter',
  templateUrl: './todos-filter.component.html',
  styleUrls: ['./todos-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosFilterComponent implements OnInit,OnDestroy {
  @Input() active: VISIBILITY_FILTER;
  @Input() filters: TodoFilter[];
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();

  control: FormControl;
  

  constructor() { }

  ngOnInit() {
    this.control = new FormControl(this.active);
    this.control.valueChanges.pipe(untilDestroyed(this))
    .subscribe(control => this.update.emit(control))
  }
  ngOnDestroy() {}

}
