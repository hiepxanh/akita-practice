import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybookDetailItemComponent } from './playbook-detail-item.component';

describe('PlaybookDetailItemComponent', () => {
  let component: PlaybookDetailItemComponent;
  let fixture: ComponentFixture<PlaybookDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybookDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybookDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
