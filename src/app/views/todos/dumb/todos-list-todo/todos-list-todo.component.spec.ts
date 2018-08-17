import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosListTodoComponent } from './todos-list-todocomponent';

describe('TodosListTodoComponent', () => {
  let component: TodosListTodoComponent;
  let fixture: ComponentFixture<TodosListTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosListTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
