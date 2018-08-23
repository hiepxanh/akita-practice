import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybookCollectionComponent } from './playbook-collection.component';

describe('PlaybookCollectionComponent', () => {
  let component: PlaybookCollectionComponent;
  let fixture: ComponentFixture<PlaybookCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybookCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybookCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
