import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteAppListComponent } from './invite-app-list.component';

describe('InviteAppListComponent', () => {
  let component: InviteAppListComponent;
  let fixture: ComponentFixture<InviteAppListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteAppListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
