import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybookSearchPreviewlistItemComponent } from './playbook-search-previewlist-item.component';

describe('PlaybookSearchPreviewlistItemComponent', () => {
  let component: PlaybookSearchPreviewlistItemComponent;
  let fixture: ComponentFixture<PlaybookSearchPreviewlistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybookSearchPreviewlistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybookSearchPreviewlistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
