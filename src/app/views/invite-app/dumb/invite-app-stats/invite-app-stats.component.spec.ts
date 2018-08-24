import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteAppStatsComponent } from './invite-app-stats.component';

describe('InviteAppStatsComponent', () => {
  let component: InviteAppStatsComponent;
  let fixture: ComponentFixture<InviteAppStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteAppStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteAppStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
