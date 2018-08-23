import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaybookRoutingModule } from './playbook-routing.module';
import { PlaybookSearchComponent } from './smart/playbook-search/playbook-search.component';
import { PlaybookCollectionComponent } from './smart/playbook-collection/playbook-collection.component';
import { PlaybookSearchSearchbarComponent } from './dumb/playbook-search-searchbar/playbook-search-searchbar.component';
import { PlaybookSearchPreviewlistComponent } from './dumb/playbook-search-previewlist/playbook-search-previewlist.component';
import { PlaybookDetailComponent } from './smart/playbook-detail/playbook-detail.component';
import { MatCardModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { PlaybookSearchPreviewlistItemComponent } from './dumb/playbook-search-previewlist-item/playbook-search-previewlist-item.component';
import { AddCommasPipe } from './pipes/add-commas.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { PlaybookStateModule } from './playbook-state/playbook-state.module';
import { PlaybookDetailItemComponent } from './dumb/playbook-detail-item/playbook-detail-item.component';

@NgModule({
  imports: [
    CommonModule,
    PlaybookRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    PlaybookStateModule
  ],
  declarations: [PlaybookSearchComponent, PlaybookCollectionComponent, PlaybookSearchSearchbarComponent, PlaybookSearchPreviewlistComponent, PlaybookDetailComponent, PlaybookSearchPreviewlistItemComponent, AddCommasPipe, EllipsisPipe, PlaybookDetailItemComponent]
})
export class PlaybookModule { }
