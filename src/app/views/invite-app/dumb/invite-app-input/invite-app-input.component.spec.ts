import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteAppInputComponent } from './invite-app-input.component';

describe('InviteAppInputComponent', () => {
  let component: InviteAppInputComponent;
  let fixture: ComponentFixture<InviteAppInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteAppInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteAppInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
