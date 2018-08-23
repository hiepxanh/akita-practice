import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybookSearchPreviewlistComponent } from './playbook-search-previewlist.component';

describe('PlaybookSearchPreviewlistComponent', () => {
  let component: PlaybookSearchPreviewlistComponent;
  let fixture: ComponentFixture<PlaybookSearchPreviewlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybookSearchPreviewlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybookSearchPreviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
