import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteAppFilterComponent } from './invite-app-filter.component';

describe('InviteAppFilterComponent', () => {
  let component: InviteAppFilterComponent;
  let fixture: ComponentFixture<InviteAppFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteAppFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteAppFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
