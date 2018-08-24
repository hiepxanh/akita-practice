import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteAppComponent } from './invite-app.component';

describe('InviteAppComponent', () => {
  let component: InviteAppComponent;
  let fixture: ComponentFixture<InviteAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
