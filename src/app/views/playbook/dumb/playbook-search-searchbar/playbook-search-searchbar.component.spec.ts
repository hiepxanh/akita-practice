import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybookSearchSearchbarComponent } from './playbook-search-searchbar.component';

describe('PlaybookSearchSearchbarComponent', () => {
  let component: PlaybookSearchSearchbarComponent;
  let fixture: ComponentFixture<PlaybookSearchSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybookSearchSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybookSearchSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
